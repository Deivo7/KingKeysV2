import { useState } from "react";
import { Search, ShoppingCart, User, Gamepad2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems, toggleCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const isActiveRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/divisas?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">
              KingKeys Gaming
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/juegos-pc"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/juegos-pc")
                  ? "text-primary"
                  : "text-secondary-600",
              )}
            >
              Juegos PC
            </Link>
            <Link
              to="/divisas"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/divisas")
                  ? "text-primary"
                  : "text-secondary-600",
              )}
            >
              Divisas
            </Link>
            <Link
              to="/dlc"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/dlc") ? "text-primary" : "text-secondary-600",
              )}
            >
              DLC
            </Link>
            <Link
              to="/gift-cards"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/gift-cards")
                  ? "text-primary"
                  : "text-secondary-600",
              )}
            >
              Gift Cards
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar juegos, divisas, gift cards..."
                className="pl-10 bg-gray-50 border-0 focus:bg-white"
              />
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-[#006D5B]"
              onClick={() => (window.location.href = "/login")}
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              to="/juegos-pc"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/juegos-pc")
                  ? "text-primary"
                  : "text-secondary-600",
              )}
            >
              Juegos PC
            </Link>
            <Link
              to="/divisas"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/divisas")
                  ? "text-primary"
                  : "text-secondary-600",
              )}
            >
              Divisas
            </Link>
            <Link
              to="/dlc"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/dlc") ? "text-primary" : "text-secondary-600",
              )}
            >
              DLC
            </Link>
            <Link
              to="/gift-cards"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActiveRoute("/gift-cards")
                  ? "text-primary"
                  : "text-secondary-600",
              )}
            >
              Gift Cards
            </Link>
          </div>
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar juegos, divisas, gift cards..."
              className="pl-10 bg-gray-50 border-0 focus:bg-white w-full"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
