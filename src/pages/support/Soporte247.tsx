import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Headphones,
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

export function Soporte247() {
  const contactMethods = [
    {
      title: "Chat en Vivo",
      description: "Respuesta inmediata con nuestros agentes especializados",
      icon: <MessageCircle className="w-6 h-6" />,
      availability: "Disponible 24/7",
      responseTime: "Inmediato",
      action: "Iniciar Chat",
      color: "bg-green-100 text-green-600",
      recommended: true,
    },
    {
      title: "Email",
      description: "Envía tu consulta detallada y recibe respuesta completa",
      icon: <Mail className="w-6 h-6" />,
      availability: "soporte@kingkeys-gaming.com",
      responseTime: "2-4 horas",
      action: "Enviar Email",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Teléfono",
      description: "Habla directamente con nuestro equipo de soporte",
      icon: <Phone className="w-6 h-6" />,
      availability: "+1 (555) GAMING-24",
      responseTime: "Inmediato",
      action: "Llamar Ahora",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const supportTopics = [
    "Problemas con claves de juegos",
    "Activación de productos",
    "Reembolsos y devoluciones",
    "Problemas de pago",
    "Consultas sobre productos",
    "Incompatibilidades técnicas",
    "Actualizaciones de pedidos",
    "Problemas de cuenta",
  ];

  const languages = [
    { name: "Español", flag: "🇪🇸", primary: true },
    { name: "English", flag: "🇺🇸" },
    { name: "Português", flag: "🇧🇷" },
    { name: "Français", flag: "🇫🇷" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Soporte 24/7
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-6">
            Estamos aquí para ayudarte en cualquier momento. Nuestro equipo
            especializado en gaming está disponible las 24 horas, los 7 días de
            la semana.
          </p>

          {/* Live Status */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-medium">
              Soporte en línea ahora
            </span>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Métodos de Contacto
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`relative ${method.recommended ? "ring-2 ring-primary" : ""}`}
              >
                {method.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Recomendado
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${method.color}`}
                  >
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-sm text-secondary-600 mb-1">
                      Disponibilidad:
                    </p>
                    <p className="font-medium">{method.availability}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600 mb-1">
                      Tiempo de respuesta:
                    </p>
                    <p className="font-medium">{method.responseTime}</p>
                  </div>
                  <Button
                    className={`w-full ${method.recommended ? "bg-primary hover:bg-primary-600" : ""}`}
                    variant={method.recommended ? "default" : "outline"}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Con qué podemos ayudarte?
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {supportTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-secondary-700">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operating Hours */}
        <div className="mb-12">
          <Card className="bg-primary-50 border-primary-200">
            <CardHeader className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-primary">
                Horarios de Atención
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Chat en Vivo
                  </h4>
                  <p className="text-secondary-600">
                    24 horas, 7 días a la semana
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-secondary-600">Respuesta en 2-4 horas</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Teléfono</h4>
                  <p className="text-secondary-600">
                    Lun-Dom: 8:00 AM - 12:00 AM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Idiomas Disponibles
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg border-2 ${lang.primary ? "border-primary bg-primary-50" : "border-gray-200"}`}
                >
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <p className="font-medium">{lang.name}</p>
                  {lang.primary && (
                    <Badge
                      variant="outline"
                      className="mt-2 border-primary text-primary"
                    >
                      Principal
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-xl p-8 text-center text-white">
          <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas Ayuda Inmediata?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            No esperes más. Nuestro equipo de expertos en gaming está listo para
            resolver tu consulta de forma rápida y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Iniciar Chat Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Soporte
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
