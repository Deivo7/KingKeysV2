import {
  DollarSign,
  Users,
  TrendingUp,
  Share2,
  Award,
  Target,
  BarChart,
  Gift,
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
import { Progress } from "@/components/ui/progress";

export function ProgramaAfiliados() {
  const benefits = [
    {
      title: "Comisiones Competitivas",
      description: "Gana hasta 15% de comisión en cada venta que generes",
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      highlight: "Hasta 15%",
    },
    {
      title: "Pagos Puntuales",
      description: "Recibe tus comisiones cada 15 días sin retrasos",
      icon: <Target className="w-6 h-6 text-primary" />,
      highlight: "Cada 15 días",
    },
    {
      title: "Material de Marketing",
      description: "Banners, enlaces y contenido promocional listo para usar",
      icon: <Share2 className="w-6 h-6 text-primary" />,
      highlight: "Gratis",
    },
    {
      title: "Dashboard Avanzado",
      description: "Estadísticas en tiempo real de tus ventas y comisiones",
      icon: <BarChart className="w-6 h-6 text-primary" />,
      highlight: "Tiempo real",
    },
  ];

  const commissionTiers = [
    {
      level: "Bronce",
      sales: "0 - $500",
      commission: "5%",
      color: "bg-orange-100 text-orange-600",
      benefits: [
        "Dashboard básico",
        "Soporte por email",
        "Materiales estándar",
      ],
    },
    {
      level: "Plata",
      sales: "$501 - $2,000",
      commission: "8%",
      color: "bg-gray-100 text-gray-600",
      benefits: [
        "Dashboard avanzado",
        "Soporte prioritario",
        "Materiales premium",
        "Reportes semanales",
      ],
    },
    {
      level: "Oro",
      sales: "$2,001 - $5,000",
      commission: "12%",
      color: "bg-yellow-100 text-yellow-600",
      benefits: [
        "Todo lo anterior",
        "Account manager dedicado",
        "Promociones exclusivas",
        "Pagos semanales",
      ],
    },
    {
      level: "Diamante",
      sales: "+$5,000",
      commission: "15%",
      color: "bg-blue-100 text-blue-600",
      benefits: [
        "Todo lo anterior",
        "Acceso VIP a lanzamientos",
        "Eventos exclusivos",
        "Bonos adicionales",
      ],
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Regístrate",
      description:
        "Completa el formulario de afiliado con tus datos y links donde promocionarás",
    },
    {
      step: 2,
      title: "Aprobación",
      description:
        "Revisamos tu aplicación en 24-48 horas y te enviamos la confirmación",
    },
    {
      step: 3,
      title: "Obtén Enlaces",
      description:
        "Accede a tu dashboard y obtén enlaces únicos de seguimiento",
    },
    {
      step: 4,
      title: "Promociona",
      description:
        "Comparte tus enlaces en redes sociales, blog, YouTube o cualquier canal",
    },
    {
      step: 5,
      title: "Gana Dinero",
      description:
        "Recibe comisiones por cada venta generada a través de tus enlaces",
    },
  ];

  const faqs = [
    {
      question: "¿Cuándo recibo mis comisiones?",
      answer:
        "Las comisiones se pagan cada 15 días para niveles Bronce y Plata, semanalmente para Oro y Diamante.",
    },
    {
      question: "¿Hay un mínimo de pago?",
      answer:
        "El mínimo de pago es $50 USD. Si no alcanzas el mínimo, se acumula para el siguiente período.",
    },
    {
      question: "¿Puedo promocionar en redes sociales?",
      answer:
        "Sí, puedes promocionar en cualquier canal digital siempre que cumplas con nuestras políticas.",
    },
    {
      question: "¿Necesito experiencia previa?",
      answer:
        "No es necesaria experiencia previa. Proporcionamos guías y materiales para ayudarte a empezar.",
    },
  ];

  const stats = [
    { label: "Afiliados Activos", value: "2,500+" },
    { label: "Comisiones Pagadas", value: "$500K+" },
    { label: "Tasa de Conversión", value: "8.5%" },
    { label: "Ticket Promedio", value: "$35" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Programa de <span className="text-primary">Afiliados</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Convierte tu pasión por los videojuegos en ingresos reales. Únete a
            nuestro programa de afiliados y gana comisiones promocionando los
            mejores juegos y divisas gaming.
          </p>
          <Badge className="bg-primary text-white text-lg px-6 py-2 mb-6">
            Hasta 15% de comisión por venta
          </Badge>
          <div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-600 text-white mr-4"
            >
              Únete Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Ver Términos
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ¿Por qué elegir nuestro programa?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-primary border-primary"
                        >
                          {benefit.highlight}
                        </Badge>
                      </div>
                      <p className="text-secondary-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commission Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Niveles de Comisión
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier, index) => (
              <Card
                key={index}
                className={`${index === 3 ? "ring-2 ring-primary" : ""} relative`}
              >
                {index === 3 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${tier.color}`}
                  >
                    <Award className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{tier.level}</CardTitle>
                  <CardDescription>
                    Ventas mensuales: {tier.sales}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-4">
                    {tier.commission}
                  </div>
                  <div className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="text-sm text-secondary-600 flex items-center"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ¿Cómo funciona?
          </h2>
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-primary-200 hidden lg:block"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
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

        {/* Earnings Calculator */}
        <div className="mb-16">
          <Card className="bg-primary-50 border-primary-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                Calculadora de Ganancias
              </CardTitle>
              <CardDescription>
                Descubre cuánto puedes ganar con nuestro programa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    $525
                  </div>
                  <div className="text-sm text-secondary-600">
                    15 ventas/mes
                  </div>
                  <div className="text-xs text-secondary-500">Nivel Bronce</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    $1,680
                  </div>
                  <div className="text-sm text-secondary-600">
                    50 ventas/mes
                  </div>
                  <div className="text-xs text-secondary-500">Nivel Plata</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    $5,250
                  </div>
                  <div className="text-sm text-secondary-600">
                    125 ventas/mes
                  </div>
                  <div className="text-xs text-secondary-500">Nivel Oro</div>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-secondary-600">
                  *Cálculos basados en ticket promedio de $35 y comisiones por
                  nivel
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <Gift className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para Comenzar a Ganar?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de afiliados que ya están generando ingresos con
            KingKeys Gaming. El registro es gratuito y puedes empezar
            inmediatamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Users className="w-5 h-5 mr-2" />
              Registrarme Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Ver Dashboard Demo
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
