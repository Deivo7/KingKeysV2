import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { Product } from "@/data/data";
import axios from "axios";
import { ShopContext } from "@/data/ShopContext";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "SET_ITEMS"; payload: CartItem[] }; // nueva acción

interface CartContextType {
  state: CartState;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);


const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      };

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      };

    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { products } = useContext(ShopContext);
  //console.log("Productos desde ShopContext:", products);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(backendUrl+'/api/cart/get', {
          headers: { token },
        });
        //console.log("Datos del carrito desde el backend:", response.data);

        if (response.data.success) {
        const cartData = response.data.cartData;
        // Mapear cartData para armar el array de CartItem con producto + quantity
        const items = Object.entries(cartData).map(([idStr, quantity]) => {
          const id = parseInt(idStr);
          const product = products.find((p) => p.id === id);
          if (!product) return null; // ignorar si no existe
          return { ...product, quantity: quantity as number };
          
        }).filter(Boolean) as CartItem[];

        dispatch({ type: "SET_ITEMS", payload: items });
      }
      } catch (error) {
        console.error("Error al obtener carrito desde el backend:", error);
      }
    };
   useEffect
    
    fetchCart();
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  }, [state.items]);
  console.log("datitos:", state.items);

  const addItem = async (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });

    try {
      const token = localStorage.getItem("token");
      await axios.post(backendUrl+'/api/cart/add',{ itemId: product.id },
        {
          headers: {
            token,
          },
        }
      );
    } catch (error) {
      console.error("Error al agregar producto al carrito en el backend:", error);
    }
  };

  const removeItem = async (productId: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
    try {
      const token = localStorage.getItem("token");
      await axios.delete(backendUrl + "/api/cart/remove", 
        { data: { itemId: productId }, headers: { token } }
      );
    } catch (error) {
      console.error("Error eliminando producto del carrito en backend:", error);
    }

  };

  const updateQuantity = async (productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
    try {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      backendUrl + "/api/cart/update",
      { itemId: productId, quantity },
      {
        headers: {
          token,
        },
      }
    );
    console.log("Respuesta del backend al actualizar:", response.data);

  } catch (error) {
    console.error("Error actualizando el carrito:", error);
  }
  };

  const clearCart = async () => {
    dispatch({ type: "CLEAR_CART" });
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`${backendUrl}/api/cart/clear`, {
          headers: { token }
        });
      } catch (error) {
        console.error("Error al vaciar el carrito:", error);
      }
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const openCart = () => {
    dispatch({ type: "OPEN_CART" });
  };

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const value: CartContextType = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
