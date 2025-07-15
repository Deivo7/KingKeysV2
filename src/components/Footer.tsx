import {
  Gamepad2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from "../Imagenes/Logo-Inicio.png"; 

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Únete a la Comunidad Gaming
          </h3>
          <p className="text-secondary-600 mb-8 max-w-2xl mx-auto">
            Recibe las mejores ofertas de juegos, divisas gratis y acceso
            anticipado a lanzamientos exclusivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="tu-email@gaming.com" className="flex-1" />
            <Button className="bg-primary hover:bg-primary-600 text-white px-8">
              Unirse
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
               <img
                src={logo}
                alt="Logo"
                className="h-[185px] w-[618px] object-contain"
              />
              
            </Link>
            <p className="text-secondary-600 mb-6 max-w-md">
              La tienda gaming líder en claves digitales, divisas virtuales y
              contenido gaming. Entrega instantánea, precios de campeón y
              soporte gamer 24/7.
            </p>
            <div className="space-y-2 text-sm text-secondary-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>soporte@kingkeys-gaming.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) GAMING-24</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Gaming Blvd, Cyber City, GC 12345</span>
              </div>
            </div>
          </div>

          {/* Gaming */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Gaming</h4>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  Juegos PC
                </Link>
              </li>
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  Juegos Consola
                </Link>
              </li>
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  Divisas Gaming
                </Link>
              </li>
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  DLC y Expansiones
                </Link>
              </li>
              <li>
                <Link
                  to="/gift-cards"
                  className="hover:text-primary transition-colors"
                >
                  Gift Cards Gaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Plataformas</h4>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  Steam
                </Link>
              </li>
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  Epic Games
                </Link>
              </li>
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  PlayStation
                </Link>
              </li>
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  Xbox
                </Link>
              </li>
              <li>
                <Link
                  to="/divisas"
                  className="hover:text-primary transition-colors"
                >
                  Nintendo Switch
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Soporte Gamer</h4>
            <ul className="space-y-2 text-sm text-secondary-600 mb-6">
              <li>
                <Link
                  to="/support"
                  className="hover:text-primary transition-colors"
                >
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-primary transition-colors"
                >
                  Cómo Canjear Claves
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-primary transition-colors"
                >
                  Política de Reembolso
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-primary transition-colors"
                >
                  Soporte 24/7
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-primary transition-colors"
                >
                  Requisitos del Sistema
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  Acerca de KingKeys
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-primary transition-colors"
                >
                  Únete al Equipo
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="hover:text-primary transition-colors"
                >
                  Prensa Gaming
                </Link>
              </li>
              <li>
                <Link
                  to="/affiliates"
                  className="hover:text-primary transition-colors"
                >
                  Programa de Afiliados
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section Bottom */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Newsletter Gaming
              </h4>
              <p className="text-sm text-secondary-600">
                Ofertas exclusivas, divisas gratis y acceso anticipado a los
                mejores lanzamientos gaming.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="tu-email@gaming.com"
                className="min-w-[250px]"
              />
              <Button className="bg-primary hover:bg-primary-600 text-white">
                Unirse
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-secondary-600 mb-4 md:mb-0">
            <span className="flex items-center">
              <Gamepad2 className="w-4 h-4 mr-1" />
              Plataforma Gaming Oficial
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-sm font-medium text-gray-900">Síguenos</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-600 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-secondary-600 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-secondary-600 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-secondary-600 hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
