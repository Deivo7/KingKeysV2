import {
  Users,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Zap,
  Coffee,
  Gamepad2,
  Code,
  Headphones,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function UneteEquipo() {
  const benefits = [
    {
      title: "Horario Flexible",
      description:
        "Trabaja cuando seas más productivo con horarios flexibles y opciones de trabajo remoto.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "Salario Competitivo",
      description:
        "Ofrecemos salarios competitivos del mercado más bonos por rendimiento.",
      icon: <DollarSign className="w-6 h-6 text-primary" />,
    },
    {
      title: "Ambiente Gaming",
      description:
        "Trabajarás rodeado de gamers apasionados en un ambiente relajado y divertido.",
      icon: <Gamepad2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Crecimiento Profesional",
      description:
        "Capacitaciones continuas, conferencias y oportunidades de desarrollo.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
    },
    {
      title: "Juegos Gratis",
      description:
        "Acceso gratuito a nuestra biblioteca de juegos para que pruebes los últimos lanzamientos.",
      icon: <Heart className="w-6 h-6 text-primary" />,
    },
    {
      title: "Equipo de Última Generación",
      description:
        "Hardware gaming de alto rendimiento y las mejores herramientas de desarrollo.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
  ];

  const openPositions = [
    {
      title: "Desarrollador Frontend React",
      department: "Tecnología",
      location: "Panamá / Remoto",
      type: "Tiempo completo",
      experience: "3+ años",
      description:
        "Buscamos un desarrollador React apasionado para mejorar nuestra plataforma de gaming.",
      requirements: ["React/TypeScript", "TailwindCSS", "API REST", "Git"],
      featured: true,
    },
    {
      title: "Especialista en Atención al Cliente Gaming",
      department: "Soporte",
      location: "Panamá",
      type: "Tiempo completo",
      experience: "1+ años",
      description:
        "Únete a nuestro equipo de soporte 24/7 para ayudar a gamers de todo el mundo.",
      requirements: [
        "Experiencia en gaming",
        "Español/Inglés",
        "Orientación al cliente",
        "Resolución de problemas",
      ],
    },
    {
      title: "Marketing Digital Gaming",
      department: "Marketing",
      location: "Miami / Remoto",
      type: "Tiempo completo",
      experience: "2+ años",
      description:
        "Lidera nuestras campañas de marketing digital enfocadas en la comunidad gaming.",
      requirements: [
        "Marketing digital",
        "Redes sociales",
        "Google Ads",
        "Analytics",
      ],
    },
    {
      title: "Analista de Datos Gaming",
      department: "Tecnología",
      location: "São Paulo / Remoto",
      type: "Tiempo completo",
      experience: "2+ años",
      description:
        "Analiza datos de comportamiento de usuarios para optimizar nuestra plataforma.",
      requirements: ["SQL", "Python/R", "Tableau", "Estadística"],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Aplica Online",
      description:
        "Envía tu CV y carta de presentación a través de nuestro formulario.",
    },
    {
      step: "2",
      title: "Revisión Inicial",
      description:
        "Nuestro equipo de RRHH revisará tu aplicación en 48-72 horas.",
    },
    {
      step: "3",
      title: "Entrevista Técnica",
      description:
        "Videollamada con el equipo técnico para evaluar tus habilidades.",
    },
    {
      step: "4",
      title: "Entrevista Cultural",
      description:
        "Conversación sobre valores, cultura gaming y fit con el equipo.",
    },
    {
      step: "5",
      title: "¡Bienvenido!",
      description: "Proceso de onboarding y bienvenida al equipo KingKeys.",
    },
  ];

  const culture = [
    "Pasión por los videojuegos y la tecnología",
    "Trabajo en equipo y colaboración",
    "Innovación constante y experimentación",
    "Diversidad e inclusión",
    "Equilibrio trabajo-vida personal",
    "Aprendizaje continuo y crecimiento",
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Únete al <span className="text-primary">Equipo</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            ¿Eres apasionado por los videojuegos y la tecnología? Forma parte
            del equipo que está revolucionando la industria gaming en
            Latinoamérica. Trabajemos juntos para crear experiencias gaming
            increíbles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-600 text-white"
            >
              Ver Posiciones Abiertas
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Conoce Nuestra Cultura
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ¿Por qué trabajar con nosotros?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Posiciones Abiertas
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className={`${position.featured ? "ring-2 ring-primary" : ""}`}
              >
                {position.featured && (
                  <div className="bg-primary text-white px-4 py-2 text-sm font-medium">
                    ⭐ Posición Destacada
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {position.title}
                        </h3>
                        <Badge variant="outline">{position.department}</Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-secondary-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {position.experience}
                        </div>
                      </div>

                      <p className="text-secondary-700 mb-3">
                        {position.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <Badge key={reqIndex} variant="secondary">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="lg:ml-6">
                      <Button
                        className={
                          position.featured
                            ? "bg-primary hover:bg-primary-600"
                            : ""
                        }
                      >
                        Aplicar Ahora
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Proceso de Selección
          </h2>
          <div className="relative">
            {/* Process line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-primary-200 hidden lg:block"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl relative z-10">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Cultura
              </h2>
              <p className="text-secondary-600 mb-6">
                En KingKeys Gaming, creemos que los mejores productos nacen de
                equipos diversos, apasionados y que se divierten trabajando
                juntos. Nuestra cultura se basa en la colaboración, la
                innovación y el amor por los videojuegos.
              </p>
              <ul className="space-y-3">
                {culture.map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-secondary-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop"
                alt="Equipo trabajando"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop"
                alt="Oficina moderna"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop"
                alt="Gaming setup"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&h=200&fit=crop"
                alt="Reunión de equipo"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para Unirte a la Revolución Gaming?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Si no ves una posición que se ajuste a tu perfil, no dudes en
            enviarnos tu CV. Siempre estamos buscando talento excepcional para
            nuestro equipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Enviar CV Espontáneo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Globe className="w-5 h-5 mr-2" />
              Seguir en LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
