export interface Product {
  id: string;
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

export const products: Product[] = [
  {
    id: "1",
    title: "Riot Points - 1350 RP",
    description:
      "1350 Riot Points para League of Legends. Desbloquea campeones, skins y otros contenidos exclusivos.",
    price: 35.99,
    image: "/api/placeholder/400/300",
    rating: 4.7,
    reviewCount: 1876,
    category: "divisas",
    platforms: ["PC", "Mac"],
    tags: ["MOBA", "Monedas", "League of Legends"],
    inStock: true,
    isInstant: true,
    game: "League of Legends",
  },
  {
    id: "2",
    title: "V-Bucks Fortnite - 1000",
    description:
      "1000 V-Bucks para Fortnite. Compra skins, pases de batalla y más contenido exclusivo.",
    price: 8.99,
    originalPrice: 9.99,
    discount: 10,
    image: "/api/placeholder/400/300",
    rating: 4.8,
    reviewCount: 3421,
    category: "divisas",
    platforms: ["Epic Games", "PlayStation"],
    tags: ["Battle Royale", "V-Bucks"],
    inStock: true,
    isInstant: true,
    game: "Fortnite",
  },
  {
    id: "3",
    title: "Cyberpunk 2077",
    description:
      "Experimenta el mundo abierto de Night City, una megalópolis obsesionada con el poder, el glamour y las modificaciones corporales.",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    image: "/api/placeholder/400/300",
    rating: 4.2,
    reviewCount: 1847,
    category: "divisas",
    platforms: ["Steam", "Epic Games"],
    tags: ["RPG", "Acción"],
    inStock: true,
    isInstant: true,
    game: "Cyberpunk 2077",
  },
  {
    id: "4",
    title: "Roblox - 800 Robux",
    description:
      "800 Robux para Roblox. Compra skins, emotes, se la envidia de tus amigos!",
    price: 9.99,
    originalPrice: 12.99,
    discount: 23,
    image: "/api/placeholder/400/300",
    rating: 4.6,
    reviewCount: 2187,
    category: "divisas",
    platforms: ["PC", "Mobile"],
    tags: ["Sandbox", "Robux"],
    inStock: true,
    isInstant: true,
    game: "Roblox",
  },
  {
    id: "5",
    title: "Apex Coins - 1000 AC",
    description:
      "1000 Apex Coins para Apex Legends. Compra skins de leyenda, armas y pases de batalla.",
    price: 9.99,
    image: "/api/placeholder/400/300",
    rating: 4.5,
    reviewCount: 2341,
    category: "divisas",
    platforms: ["Steam", "Origin"],
    tags: ["Battle Royale", "Apex Coins"],
    inStock: true,
    isInstant: true,
    game: "Apex Legends",
  },
  {
    id: "6",
    title: "3000 Minecoins - Minecraft Bedrock Edition",
    description: "Compra Skins, mapas de aventuras, paquetes y mucho más",
    price: 26.95,
    image: "/api/placeholder/400/300",
    rating: 4.8,
    reviewCount: 4567,
    category: "divisas",
    platforms: ["PC", "Mac"],
    tags: ["Sandbox", "Minecoins"],
    inStock: true,
    isInstant: true,
    game: "Minecraft",
  },
  {
    id: "7",
    title: "FIFA 23 FIFA Points",
    description:
      "El juego de fútbol más realista del mundo con gráficos renovados, nueva jugabilidad y más.",
    price: 29.99,
    originalPrice: 69.99,
    discount: 57,
    image: "/api/placeholder/400/300",
    rating: 4.3,
    reviewCount: 1987,
    category: "divisas",
    platforms: ["Steam", "Origin"],
    tags: ["Deportes", "FIFA Points"],
    inStock: true,
    isInstant: true,
    game: "FIFA 23",
  },
  {
    id: "8",
    title: "Play Store Gift Card - 10$",
    description:
      "Épica historia de la vida en el corazón implacable de América. El mundo abierto más detallado jamás creado.",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    image: "/api/placeholder/400/300",
    rating: 4.7,
    reviewCount: 2567,
    category: "gift-cards",
    platforms: ["Android"],
    tags: ["Google Play", "Gift Card"],
    inStock: true,
    isInstant: true,
  },
  {
    id: "9",
    title: "PlayStation Store - $25 USD",
    description:
      "Tarjeta regalo de $25 USD para PlayStation Store. Compra juegos, DLC y más.",
    price: 24.99,
    image: "/api/placeholder/400/300",
    rating: 4.8,
    reviewCount: 3210,
    category: "gift-cards",
    platforms: ["PlayStation"],
    tags: ["PlayStation", "Gift Card"],
    inStock: true,
    isInstant: true,
  },
  {
    id: "10",
    title: "Steam $20",
    description:
      "Tarjeta regalo de $20 para Steam. Añade fondos a tu cartera de Steam.",
    price: 19.99,
    image: "/api/placeholder/400/300",
    rating: 4.9,
    reviewCount: 5432,
    category: "gift-cards",
    platforms: ["Steam"],
    tags: ["Steam", "Gift Card"],
    inStock: true,
    isInstant: true,
  },
];

export const featuredProducts = products.slice(0, 5);

export const getProductsByCategory = (category: "divisas" | "gift-cards") =>
  products.filter((product) => product.category === category);

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);
