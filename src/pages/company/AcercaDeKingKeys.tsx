import {
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AcercaDeKingKeys() {
  const stats = [
    {
      label: "Gamers Satisfechos",
      value: "500K+",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Juegos Disponibles",
      value: "10K+",
      icon: <Target className="w-6 h-6" />,
    },
    {
      label: "Años de Experiencia",
      value: "8+",
      icon: <Award className="w-6 h-6" />,
    },
    {
      label: "Países Atendidos",
      value: "50+",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      title: "Pasión por el Gaming",
      description:
        "Somos gamers para gamers. Entendemos la emoción de cada nuevo lanzamiento y la importancia de obtener el mejor precio.",
      icon: <Heart className="w-8 h-8 text-primary" />,
    },
    {
      title: "Entrega Instantánea",
      description:
        "Tu tiempo es valioso. Por eso garantizamos la entrega inmediata de claves digitales para que puedas jugar sin esperas.",
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      title: "Confianza y Seguridad",
      description:
        "Todas nuestras claves son 100% originales y legítimas. Tu seguridad y satisfacción son nuestra prioridad.",
      icon: <Shield className="w-8 h-8 text-primary" />,
    },
    {
      title: "Innovación Continua",
      description:
        "Siempre estamos mejorando nuestra plataforma y servicios para ofrecerte la mejor experiencia de compra.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
    },
  ];

  const timeline = [
    {
      year: "2016",
      title: "Los Inicios",
      description:
        "KingKeys Gaming nace como una pequeña tienda online con la visión de democratizar el acceso a los videojuegos.",
    },
    {
      year: "2018",
      title: "Expansión Regional",
      description:
        "Expandimos nuestros servicios a toda Latinoamérica, convirtiéndonos en el proveedor de confianza para millones de gamers.",
    },
    {
      year: "2020",
      title: "Innovación Digital",
      description:
        "Lanzamos nuestra plataforma renovada con entrega instantánea y soporte 24/7, revolucionando la experiencia de compra.",
    },
    {
      year: "2022",
      title: "Líderes del Mercado",
      description:
        "Alcanzamos el medio millón de usuarios satisfechos y nos consolidamos como la tienda gaming líder en la región.",
    },
    {
      year: "2024",
      title: "El Futuro",
      description:
        "Continuamos innovando con nuevas tecnologías y servicios para mantener nuestro liderazgo en el mercado gaming.",
    },
  ];

  const team = [
    {
      name: "Carlos Mendoza",
      role: "CEO & Fundador",
      bio: "Gamer desde los 90s, Carlos fundó KingKeys con la misión de hacer los juegos más accesibles para todos.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "María González",
      role: "CTO",
      bio: "Ingeniera de software especializada en plataformas de gaming, lidera nuestro equipo técnico.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b37b?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Diego Ruiz",
      role: "Head of Gaming",
      bio: "Experto en la industria gaming, se encarga de las alianzas estratégicas con desarrolladores y publishers.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Acerca de <span className="text-primary">KingKeys Gaming</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Somos la tienda gaming líder que conecta a millones de jugadores con
            sus juegos favoritos. Desde 2016, hemos sido pioneros en ofrecer
            claves digitales auténticas con entrega instantánea y precios
            competitivos.
          </p>
          <Badge className="bg-primary text-white text-lg px-6 py-2">
            Confianza Gaming desde 2025
          </Badge>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Democratizar el acceso a los videojuegos ofreciendo las mejores
              claves digitales al precio más competitivo, con entrega
              instantánea y soporte excepcional.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {value.icon}
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestra Historia
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}
                  >
                    <Card>
                      <CardHeader>
                        <div
                          className={`flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                        >
                          <Badge
                            variant="outline"
                            className="text-primary border-primary"
                          >
                            {event.year}
                          </Badge>
                        </div>
                        <CardTitle
                          className={index % 2 === 0 ? "md:text-right" : ""}
                        >
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p
                          className={`text-secondary-600 ${index % 2 === 0 ? "md:text-right" : ""}`}
                        >
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-secondary-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            ¿Quieres Formar Parte de Nuestro Equipo?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Estamos siempre buscando talento apasionado por los videojuegos y la
            tecnología. Únete a nosotros y ayuda a construir el futuro del
            gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/company/unete-equipo"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-primary hover:bg-gray-100 h-12 px-6"
            >
              Ver Oportunidades
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-white text-white hover:bg-white hover:text-primary h-12 px-6"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AcercaDeKingKeys;
