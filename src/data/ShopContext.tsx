import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Product } from '../data/products';

interface ShopContextType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  featuredProducts: Product[];
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: 'divisas' | 'gift-cards') => Product[];
  searchProducts: (query: string) => Product[];
  filterProducts: (filters: {
    categories?: string[];
    platforms?: string[];
    priceRange?: [number, number];
    search?: string;
  }) => Product[];
}

export const ShopContext = createContext<ShopContextType>({
  products: [],
  setProducts: () => {},
  featuredProducts: [],
  getProductById: () => undefined,
  getProductsByCategory: () => [],
  searchProducts: () => [],
  filterProducts: () => [],
});

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState<Product[]>([]);

  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/productos');
      console.log("Respuesta del backend:", response.data);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error("La respuesta del servidor no contiene productos");
      }
    } catch (error: any) {
      console.log('Error al obtener productos:', error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    console.log("Productos actuales:", products);
  }, [products]);

  const featuredProducts = products.slice(0, 5);

  const getProductById = (id: string) =>
    products.find((product) => product.id === id);

  const getProductsByCategory = (category: 'divisas' | 'gift-cards') =>
    products.filter((product) => product.category === category);

  const searchProducts = (query: string): Product[] => {
    if (!query.trim()) return products;

    const lowerQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.game?.toLowerCase().includes(lowerQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        product.platforms.some((platform) =>
          platform.toLowerCase().includes(lowerQuery)
        )
    );
  };

  const filterProducts = (filters: {
    categories?: string[];
    platforms?: string[];
    priceRange?: [number, number];
    search?: string;
  }): Product[] => {
    let filtered = [...products];

    if (filters.search) {
      filtered = searchProducts(filters.search);
    }

    if (filters.categories && filters.categories.length > 0) {
      const categoryMap: { [key: string]: string } = {
        'juegos-pc': 'divisas',
        'divisas-juegos': 'divisas',
        'juegos-consola': 'divisas',
        'dlc-expansiones': 'divisas',
        'tarjetas-regalo': 'gift-cards',
        'juegos-retro': 'divisas',
      };

      filtered = filtered.filter((product) =>
        filters.categories!.some(
          (filterCat) => categoryMap[filterCat] === product.category
        )
      );
    }

    if (filters.platforms && filters.platforms.length > 0) {
      filtered = filtered.filter((product) =>
        filters.platforms!.some((platform) =>
          product.platforms.some((p) =>
            p.toLowerCase().includes(platform.toLowerCase())
          )
        )
      );
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    return filtered;
  };

  const contextValue: ShopContextType = {
    products,
    setProducts,
    featuredProducts,
    getProductById,
    getProductsByCategory,
    searchProducts,
    filterProducts,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
