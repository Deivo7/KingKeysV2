import { Link } from "react-router-dom";
import { Star, ShoppingCart, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem, openCart } = useCart();

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-shadow duration-200",
        className,
      )}
    >
      <CardContent className="p-0">
        <div className="relative">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discountPercentage > 0 && (
              <Badge className="bg-yellow-500 text-black font-bold">
                -{discountPercentage}%
              </Badge>
            )}
            {product.isInstant && (
              <Badge className="bg-primary text-white">
                <Zap className="w-3 h-3 mr-1" />
                Instant
              </Badge>
            )}
          </div>
        </div>

        <div className="p-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {product.title}
            </h3>
          </Link>

          <p className="text-secondary-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-4 h-4",
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300",
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-secondary-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Platforms */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.platforms.slice(0, 3).map((platform) => (
              <Badge key={platform} variant="secondary" className="text-xs">
                {platform}
              </Badge>
            ))}
            {product.platforms.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{product.platforms.length - 3}
              </Badge>
            )}
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-center gap-2">
              {product.originalPrice && (
                <span className="text-secondary-400 line-through text-sm">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-xl font-bold text-gray-900">
                ${product.price}
              </span>
            </div>
          </div>

          {/* Add to Cart Button - Now below price */}
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary-600 text-white mb-2"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            {product.inStock ? "Agregar al Carrito" : "Sin Stock"}
          </Button>

          {/* Stock status */}
          <div className="text-sm">
            {product.inStock ? (
              <span className="text-green-600 flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                En Stock
              </span>
            ) : (
              <span className="text-red-600 flex items-center">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                Agotado
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
