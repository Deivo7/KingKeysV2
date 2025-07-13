export interface Producto {
  id: string; // viene como string en el map
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string; // URL
  rating: number;
  reviewCount: number;
  category: string | null; // puede ser null si no tiene categoría
  platforms: string[]; // ejemplo: ["PC", "Mac"]
  tags: string[]; // ejemplo: ["League of Legends"]
  inStock: boolean;
  isInstant: boolean;
  game: string;
}