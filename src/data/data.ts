//Productos
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: "divisas" | "gift-cards";
  platforms: string[];
  tags: string[];
  inStock: boolean;
  isInstant?: boolean;
  game?: string;
}
//Plataforma
export interface Platform {
  id: string;
  name: string;
}

//Categorias
export interface Category{
    id: string;
    name: string;
}

//User
export interface Profile{
  name: string;
  email:string;
  createdat:string;
}