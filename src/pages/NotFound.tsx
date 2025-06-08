import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Página no encontrada
            </h2>
            <p className="text-secondary-600 mb-8">
              Lo sentimos, la página que buscas no existe o ha sido movida. Pero
              no te preocupes, ¡tenemos muchos juegos increíbles esperándote!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-primary hover:bg-primary-600 text-white">
                <Home className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>
            <Link to="/divisas">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Search className="w-4 h-4 mr-2" />
                Explorar Juegos
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-secondary-500">
            <p>
              ¿Necesitas ayuda?{" "}
              <Link to="/support" className="text-primary hover:underline">
                Contacta nuestro soporte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
