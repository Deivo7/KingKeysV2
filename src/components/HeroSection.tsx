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
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Tu Tienda de{' '}
                <br />
                Divisas Gaming
              </h1>
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

          {/* Right Content - Product Cards with Real Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Cyberpunk Card */}
            <Link to="/product/3" className="block">
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop"
                  alt="Cyberpunk 2077"
                  className="w-full h-32 object-cover"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4"
                  style={{
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F034b14ad7b0d4c4e9cafd259c3cd9e2e)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                >
                  <Badge className="bg-yellow-500 text-black mb-2 w-fit">
                    -50%
                  </Badge>
                  <h3 className="font-bold text-lg text-white mb-1">
                    Cyberpunk 2077
                  </h3>
                  <p className="text-sm text-white opacity-90">$29.99</p>
                </div>
              </div>
            </Link>

            {/* Roblox Card */}
            <Link to="/product/4" className="block">
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
                  alt="Roblox - 800 Robux"
                  className="w-full h-32 object-cover"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4"
                  style={{
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2Fa57eb1fb1f8a4c84b7943a602b35c1a4)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                >
                  <Badge className="bg-primary text-white mb-2 w-fit">
                    -23%
                  </Badge>
                  <h3 className="font-bold text-lg text-white mb-1">
                    Roblox - 800 Robux
                  </h3>
                  <p className="text-sm text-white opacity-90">$9.99</p>
                </div>
              </div>
            </Link>

            {/* Fortnite Card */}
            <Link to="/product/2" className="block">
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
                  alt="1000 V-Bucks"
                  className="w-full h-32 object-cover"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4"
                  style={{
                    backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2Fe0a258d93c6f4fe19261221513fbed1b)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                >
                  <Badge className="bg-blue-500 text-white mb-2 w-fit">
                    Divisas
                  </Badge>
                  <h3 className="font-bold text-lg text-white mb-1">
                    1000 V-Bucks
                  </h3>
                  <p className="text-sm text-white opacity-90">$8.99</p>
                </div>
              </div>
            </Link>

            {/* Steam Card */}
            <Link to="/product/10" className="block">
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5819097f501443e7b4712716fcc002a1%2F453d102095a1417e9bfa02c7cf9a1351"
                  alt="Steam $20"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                  <Badge className="bg-gray-600 text-white mb-2 w-fit">
                    Gift Card
                  </Badge>
                  <h3 className="font-bold text-lg text-white mb-1">
                    Steam $20
                  </h3>
                  <p className="text-sm text-white opacity-90">$19.99</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}