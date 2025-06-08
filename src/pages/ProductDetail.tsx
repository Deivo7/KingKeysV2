import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Share2,
  Shield,
  Zap,
  Download,
  Heart,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProductById } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = id ? getProductById(id) : null;

  const handleAddToCart = () => {
    if (product) {
      // Add the specified quantity to cart
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
      openCart();
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Product Not Found
            </h1>
            <Link to="/divisas">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${product.category}`}>
                {product.category === "divisas"
                  ? "Game-Currencies"
                  : "Gift Cards"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back Button */}
        <Link to={`/${product.category}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-xl"
            />
            {product.isInstant && (
              <Badge className="absolute top-4 right-4 bg-primary text-white">
                <Zap className="w-3 h-3 mr-1" />
                Instant Delivery
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300",
                      )}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                {product.originalPrice && (
                  <span className="text-2xl text-secondary-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {discountPercentage > 0 && (
                  <Badge className="bg-green-500 text-white text-lg px-3 py-1">
                    -{discountPercentage}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Available Platforms */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Available Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.platforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="px-3 py-1">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-3 h-3 rounded-full",
                  product.inStock ? "bg-green-500" : "bg-red-500",
                )}
              ></div>
              <span className="font-medium">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary-600 text-white"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock
                    ? `Add to Cart - ${(product.price * quantity).toFixed(2)}`
                    : "Sin Stock"}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={cn(
                      "w-5 h-5",
                      isFavorite ? "fill-red-500 text-red-500" : "",
                    )}
                  />
                </Button>

                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Instant Delivery</h4>
                <p className="text-xs text-secondary-600">
                  Get your key within minutes
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Authentic Product</h4>
                <p className="text-xs text-secondary-600">
                  Genuine software guaranteed
                </p>
              </div>
              <div className="text-center">
                <Download className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Easy Download</h4>
                <p className="text-xs text-secondary-600">
                  Simple installation process
                </p>
              </div>
            </div>

            {/* Security badges */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t text-sm text-secondary-600">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Secure Payment
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                Instant Delivery
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                Easy Download
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="system-requirements">
                System Requirements
              </TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">
                  Product Description
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-secondary-600 leading-relaxed mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="system-requirements" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">
                    Minimum Requirements
                  </h4>
                  <ul className="space-y-2 text-secondary-600">
                    <li>
                      <strong>OS:</strong> Windows 10 64-bit
                    </li>
                    <li>
                      <strong>Processor:</strong> Intel Core i5-3570K or AMD
                      FX-8310
                    </li>
                    <li>
                      <strong>Memory:</strong> 8 GB RAM
                    </li>
                    <li>
                      <strong>Graphics:</strong> NVIDIA GeForce GTX 970 or AMD
                      Radeon RX 470
                    </li>
                    <li>
                      <strong>DirectX:</strong> Version 12
                    </li>
                    <li>
                      <strong>Storage:</strong> 70 GB available space
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">
                    Recommended Requirements
                  </h4>
                  <ul className="space-y-2 text-secondary-600">
                    <li>
                      <strong>OS:</strong> Windows 10 64-bit
                    </li>
                    <li>
                      <strong>Processor:</strong> Intel Core i7-4790 or AMD
                      Ryzen 3 3200G
                    </li>
                    <li>
                      <strong>Memory:</strong> 12 GB RAM
                    </li>
                    <li>
                      <strong>Graphics:</strong> NVIDIA GeForce GTX 1060 6GB or
                      AMD Radeon RX 590
                    </li>
                    <li>
                      <strong>DirectX:</strong> Version 12
                    </li>
                    <li>
                      <strong>Storage:</strong> 70 GB available space (SSD
                      recommended)
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>

                {/* Sample reviews */}
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b pb-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className={cn(
                                "w-4 h-4",
                                j < 4
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300",
                              )}
                            />
                          ))}
                        </div>
                        <span className="font-medium">Usuario{i + 1}</span>
                        <span className="text-sm text-secondary-600">
                          hace 2 días
                        </span>
                      </div>
                      <p className="text-secondary-600">
                        Excelente producto, entrega muy rápida y sin problemas.
                        Lo recomiendo totalmente.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
