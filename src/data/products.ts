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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2Fae9b6c06fb69498393a69b5bb1004646",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2Fe0a258d93c6f4fe19261221513fbed1b",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F034b14ad7b0d4c4e9cafd259c3cd9e2e",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2Fa57eb1fb1f8a4c84b7943a602b35c1a4",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F0d77e6719bc24bed81ba1e36406520b8",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F8a256b7e065f404da72999c4b5d46f15",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2Ff9213eb9d3704588a18a4571a64f89e4",
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
      "Tarjeta regalo de $10 USD para Google Play Store. Compra aplicaciones, juegos y contenido digital.",
    price: 10.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F475f7a82d0c242e1afd4cc03a54d27f4",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F1e6160198c0f46f288af9391c293db44",
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
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F453d102095a1417e9bfa02c7cf9a1351",
    rating: 4.9,
    reviewCount: 5432,
    category: "gift-cards",
    platforms: ["Steam"],
    tags: ["Steam", "Gift Card"],
    inStock: true,
    isInstant: true,
  },
  {
    id: "11",
    title: "Xbox Game Pass Ultimate - 3 meses",
    description:
      "Acceso a más de 100 juegos, multijugador online y EA Play incluido.",
    price: 44.99,
    originalPrice: 49.99,
    discount: 10,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F02a3bc98ef7e47638b6734825e9e068d",
    rating: 4.9,
    reviewCount: 8934,
    category: "gift-cards",
    platforms: ["Xbox", "PC"],
    tags: ["Xbox", "Game Pass", "Suscripción"],
    inStock: true,
    isInstant: true,
  },
  {
    id: "12",
    title: "Nintendo eShop - $35 USD",
    description:
      "Tarjeta regalo para Nintendo eShop. Compra juegos para Nintendo Switch.",
    price: 34.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2Fea6991a1b4b24b32b4cb770758e739a6",
    rating: 4.6,
    reviewCount: 2134,
    category: "gift-cards",
    platforms: ["Nintendo Switch"],
    tags: ["Nintendo", "eShop", "Gift Card"],
    inStock: true,
    isInstant: true,
  },
];

export const featuredProducts = products.slice(0, 5);

export const getProductsByCategory = (category: "divisas" | "gift-cards") =>
  products.filter((product) => product.category === category);

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

export const searchProducts = (query: string) => {
  if (!query.trim()) return products;

  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.game?.toLowerCase().includes(lowerQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      product.platforms.some((platform) =>
        platform.toLowerCase().includes(lowerQuery),
      ),
  );
};

export const filterProducts = (
  products: Product[],
  filters: {
    categories?: string[];
    platforms?: string[];
    priceRange?: [number, number];
    search?: string;
  },
) => {
  let filtered = [...products];

  // Apply search filter
  if (filters.search) {
    filtered = searchProducts(filters.search);
  }

  // Apply category filter
  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter((product) => {
      // Map filter categories to product categories
      const categoryMap: { [key: string]: string } = {
        "juegos-pc": "divisas",
        "divisas-juegos": "divisas",
        "juegos-consola": "divisas",
        "dlc-expansiones": "divisas",
        "tarjetas-regalo": "gift-cards",
        "juegos-retro": "divisas",
      };

      return filters.categories!.some(
        (filterCat) => categoryMap[filterCat] === product.category,
      );
    });
  }

  // Apply platform filter
  if (filters.platforms && filters.platforms.length > 0) {
    filtered = filtered.filter((product) =>
      filters.platforms!.some((platform) =>
        product.platforms.some((productPlatform) =>
          productPlatform.toLowerCase().includes(platform.toLowerCase()),
        ),
      ),
    );
  }

  // Apply price range filter
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(
      (product) => product.price >= min && product.price <= max,
    );
  }

  return filtered;
};
