import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import magic1 from "../Imagenes/magic1.png";
import magic2 from "../Imagenes/magic2.png";
import magic3 from "../Imagenes/magic3.png";

const images = [magic1, magic2, magic3];

const WindParticles = ({ active }: { active: boolean }) => {
  if (!active) return null;

  const count = 30;
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="w-[4px] h-[4px] bg-teal-400 rounded-full absolute blur-sm opacity-80"
          initial={{
            x: Math.random() * 300 - 150,
            y: Math.random() * 200 + 100,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [-20, -150],
            opacity: [0, 0.8, 0],
            scale: [0.6, 1.2, 0.3],
            x: `+=${Math.random() * 80 - 40}`,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: i * 0.03,
          }}
        />
      ))}
    </div>
  );
};

export function HeroSection() {
  const [cycleIndex, setCycleIndex] = useState(0);
  const [windEffect, setWindEffect] = useState(false);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setWindEffect(true);
      setTimeout(() => {
        setCycleIndex(nextIndex);
        setNextIndex((nextIndex + 1) % images.length);
        setWindEffect(false);
      }, 800);
    }, 6000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  const productLinks = ["/product/3", "/product/4", "/product/2"];

  const Card = ({
    image,
    index,
    productLink,
  }: {
    image: string;
    index: number;
    productLink: string;
  }) => {
    const positions = [
      { rotateZ: -10, x: -80 },
      { rotateZ: 2, x: 2 },
      { rotateZ: 10, x: 80 },
    ];
    const { rotateZ, x } = positions[index];

    return (
      <Link to={productLink}>
        <motion.div
          layout
          animate={{
            x,
            rotateZ,
            rotateY: windEffect ? [0, 4, -4, 2, 0] : 0,
            scale: windEffect ? 1.05 : 1,
          }}
          transition={{
            duration: windEffect ? 0.8 : 0.4,
            ease: "easeInOut",
          }}
          className="relative w-[170px] h-[250px] rounded-xl shadow-xl cursor-pointer z-10"
          style={{ willChange: "transform" }}
        >
          <div
            className="absolute w-full h-full rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      </Link>
    );
  };

  return (
<section className="bg-gradient-to-br from-gray-50 to-gray-100 py-15 lg:py-24 my-10">
      <div className="container mx-auto px-1">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto informativo */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary text-white mb-4">
                Más de 10,000+ Juegos y Divisas Disponibles
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Tu Tienda de <br />
                Divisas Gaming
              </h1>
              <p className="text-lg text-secondary-600 mb-8 max-w-xl">
                Descubre miles de juegos, divisas virtuales y gift cards para
                todas las plataformas. Entrega instantánea, precios
                inmejorables y soporte 24/7.
              </p>
            </div>

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
                <div className="text-sm text-secondary-600">
                  Soporte Gamer
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas animadas con efecto viento */}
          <div className="flex justify-center items-center relative">
            <WindParticles active={windEffect} />
            <div className="relative flex gap-[-80px] z-10">
              {[0, 1, 2].map((i) => (
                <Card
                  key={`${cycleIndex}-${i}`}
                  image={images[(cycleIndex + i) % images.length]}
                  index={i}
                  productLink={productLinks[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
