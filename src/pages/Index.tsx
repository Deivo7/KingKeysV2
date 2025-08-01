import { Link } from "react-router-dom";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { ShopContext } from '@/data/ShopContext';
import { useContext } from "react";

export function Index() {
  const { featuredProducts } = useContext(ShopContext);
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
         <div className="bg-white shadow-lg p-6 lg:p-9 my-9">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8 flex-col sm:flex-row gap-4 sm:gap-0">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Productos destacados
                </h2>
                <p className="text-secondary-600">
                  Selección de las mejores ofertas y novedades
                </p>
              </div>
              <Link to="/divisas">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300">
                  View All Products
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
    </div>
  </div>
</div>


          <ProductGrid products={featuredProducts} />

          <div className="text-center mt-8 sm:hidden">
            <Link to="/divisas">
              <Button variant="outline" className="w-full">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">
            Oferta Especial para Gamers
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Compra 3 juegos y obtén 20% de descuento adicional + divisas gratis
          </p>
          <Link to="/divisas">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Ver Oferta Especial →
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-15 lg:py-24 my-10">


  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-primary mb-6">
        ¿Por qué elegir KingKeys Gaming?
      </h2>
      <p className="text-secondary-700 text-lg max-w-2xl mx-auto">
        Somos la tienda gaming de confianza con la mejor experiencia para jugadores de todos los niveles
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* 🔰 Tarjeta 1 */}
      <div className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-10 h-10 bg-primary text-white text-lg rounded-lg flex items-center justify-center">
            ⚡
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Entrega Instantánea
        </h3>
        <p className="text-secondary-600">
          Recibe tus claves de juegos y divisas instantáneamente después de la compra
        </p>
      </div>

      {/* 🔰 Tarjeta 2 */}
      <div className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-10 h-10 bg-primary text-white text-lg rounded-lg flex items-center justify-center">
            🛡️
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Claves Originales
        </h3>
        <p className="text-secondary-600">
          Todas nuestras claves son 100% originales y provienen de distribuidores oficiales
        </p>
      </div>

      {/* 🔰 Tarjeta 3 */}
      <div className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-10 h-10 bg-primary text-white text-lg rounded-lg flex items-center justify-center">
            🎮
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Todas las Plataformas
        </h3>
        <p className="text-secondary-600">
          Steam, Epic Games, PlayStation, Xbox, Nintendo Switch y más plataformas
        </p>
      </div>

      {/* 🔰 Tarjeta 4 */}
      <div className="text-center bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-10 h-10 bg-primary text-white text-lg rounded-lg flex items-center justify-center">
            🏆
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Mejor Precio Garantizado
        </h3>
        <p className="text-secondary-600">
          Encontramos un precio mejor y te igualamos la oferta + 5% adicional de descuento
        </p>
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
}
