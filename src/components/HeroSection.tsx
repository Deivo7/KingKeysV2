import { Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary text-white mb-4">
                Más de 10,000+ Juegos y Divisas Disponibles
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Tu Tienda de{" "}
                <span className="text-primary">Juegos Digitales</span>
                <br />y Divisas Gaming
              </h1>
              <p className="text-lg text-secondary-600 mb-8 max-w-xl">
                Descubre miles de juegos, divisas virtuales y gift cards para
                todas las plataformas. Entrega instantánea, precios inmejorables
                y soporte 24/7.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Entrega Instantánea
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Recibe tus claves de juegos y divisas instantáneamente
                    después de la compra
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Claves Originales
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Todas nuestras claves son 100% originales y provienen de
                    distribuidores oficiales
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Mejor Precio Garantizado
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Encontramos un precio mejor y te igualamos la oferta + 5%
                    adicional de descuento
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/divisas">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  Explorar Juegos →
                </Button>
              </Link>
              <Link to="/divisas">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Divisas Gaming
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  500K+
                </div>
                <div className="text-sm text-secondary-600">
                  Gamers Satisfechos
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  10K+
                </div>
                <div className="text-sm text-secondary-600">
                  Juegos Disponibles
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  24/7
                </div>
                <div className="text-sm text-secondary-600">Soporte Gamer</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Cyberpunk Card */}
            <Link to="/product/3" className="block">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-black relative overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="relative z-10">
                  <Badge className="bg-black/20 text-black mb-2">-50%</Badge>
                  <h3 className="font-bold text-lg mb-1">Cyberpunk 2077</h3>
                  <p className="text-sm opacity-75">$29.99</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-black/10 rounded-full"></div>
              </div>
            </Link>

            {/* Roblox Card */}
            <Link to="/product/4" className="block">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-white relative overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="relative z-10">
                  <Badge className="bg-primary text-white mb-2">-23%</Badge>
                  <h3 className="font-bold text-lg mb-1">Roblox - 800 Robux</h3>
                  <p className="text-sm opacity-75">$9.99</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              </div>
            </Link>

            {/* Fortnite Card */}
            <Link to="/product/2" className="block">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white relative overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="relative z-10">
                  <Badge className="bg-white/20 text-white mb-2">Divisas</Badge>
                  <h3 className="font-bold text-lg mb-1">1000 V-Bucks</h3>
                  <p className="text-sm opacity-75">$8.99</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              </div>
            </Link>

            {/* Steam Card */}
            <Link to="/product/10" className="block">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-white relative overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="relative z-10">
                  <Badge className="bg-white/20 text-white mb-2">
                    Gift Card
                  </Badge>
                  <h3 className="font-bold text-lg mb-1">Steam $20</h3>
                  <p className="text-sm opacity-75">$19.99</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
