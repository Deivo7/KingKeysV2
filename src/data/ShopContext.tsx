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
import { Product, Platform, Category, Profile } from '../data/data';
import { log } from 'node:console';


interface ShopContextType {
  profile: Profile | null; // ✅
  setProfile: Dispatch<SetStateAction<Profile | null>>;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  platforms: Platform[];
  setPlatforms: Dispatch<SetStateAction<Platform[]>>;
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>
  featuredProducts: Product[];
  getUserProfile: () => Promise<void>; 
  getProductById: (id: number) => Product | undefined;
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
  profile: null,
  setProfile:()=>{},
  products: [],
  platforms:[],
  categories:[],
  getUserProfile: async () => {}, 
  setCategories:() => {},
  setProducts: () => {},
  setPlatforms: () => {},
  featuredProducts: [],
  getProductById: () => undefined,
  getProductsByCategory: () => [],
  searchProducts: () => [],
  filterProducts: () => []
});

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [profile, setProfile] = useState<Profile | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);


  const getUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const response = await axios.get(backendUrl + '/api/auth/profile',{
        headers: { token },
      });
      console.log("Respuesta del backend:", response.data);
      if (response.data.success) {
        setProfile(response.data.profile);
      } else {
        toast.error("No Se Obtiene el Perfil");
      }
    } catch (error: any) {
      console.log('Error al obtener el Perfil:', error);
      toast.error(error.message);
    }
  };

  

  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/productos/list');
      //console.log("Respuesta del backend:", response.data);
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

  const getPlatformData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/plataformas/list');
      //console.log("Respuesta del backend:", response.data);
      if (response.data.success) {
        setPlatforms(response.data.platforms);
      } else {
        toast.error("La respuesta del servidor no contiene productos");
      }
    } catch (error: any) {
      console.log('Error al obtener productos:', error);
      toast.error(error.message);
    }
  };

   const getCategoryData = async () => {
   try {
      const response = await axios.get(backendUrl + '/api/categorias/list');
      //console.log("Respuesta del backend:", response.data);
      if (response.data.success) {
        setCategories(response.data.categories);
      } else {
        toast.error("La respuesta del servidor no contiene productos");
      }
    } catch (error: any) {
      console.log('Error al obtener productos:', error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserProfile();
    getUserProfile();
    getProductData();
    getPlatformData();
    getCategoryData();
  }, []);

  useEffect(() => {
    //console.log("Productos actuales:", products);
    //console.log("Plataformas actuales:", platforms);
    //console.log("categorias actuales:", categories);
  },);

  

  const featuredProducts = products.slice(0, 5);

  const getProductById = (id: number) =>
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
    //Buscar productos 
    if (filters.search) {
      filtered = searchProducts(filters.search);
    }
    //filtro por categorias
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories!.some(
          (filterCat) => filterCat === product.category
        )
      );
    }
    //Filtro por Plataforma
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
    profile,
    setProfile,
    products,
    platforms,
    categories,
    setCategories,
    setProducts,
    setPlatforms,
    featuredProducts,
    getUserProfile,
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
