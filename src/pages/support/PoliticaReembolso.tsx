import { Shield, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export function PoliticaReembolso() {
  const conditions = [
    {
      title: "Productos No Canjeados",
      description:
        "Claves de juegos que no han sido activadas en ninguna plataforma",
      period: "48 horas",
      eligible: true,
    },
    {
      title: "Productos Defectuosos",
      description: "Claves que no funcionan o han sido activadas previamente",
      period: "7 días",
      eligible: true,
    },
    {
      title: "Cambio de Opinión",
      description: "Productos adquiridos por error o cambio de preferencia",
      period: "24 horas",
      eligible: true,
      condition: "Solo si no han sido canjeados",
    },
    {
      title: "Productos Canjeados",
      description: "Claves ya activadas en plataformas digitales",
      period: "N/A",
      eligible: false,
    },
  ];

  const steps = [
    "Contacta nuestro soporte a través del chat o email",
    "Proporciona tu número de orden y motivo del reembolso",
    "Nuestro equipo verificará tu solicitud en 24-48 horas",
    "Si es aprobada, el reembolso se procesará en 5-7 días hábiles",
    "Recibirás confirmación por email una vez completado",
  ];

  const excludedItems = [
    "Gift cards ya canjeadas",
    "Productos en oferta especial (más del 50% de descuento)",
    "Suscripciones activas (Game Pass, PS Plus, etc.)",
    "Productos comprados con códigos promocionales",
    "DLC para juegos ya instalados y jugados",
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Reembolso
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            En KingKeys Gaming, queremos que estés completamente satisfecho con
            tu compra. Conoce nuestras condiciones de reembolso y el proceso
            para solicitar devoluciones.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <AlertTriangle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Aviso importante:</strong> Los productos digitales tienen
            políticas especiales de reembolso. Una vez canjeada una clave, no es
            posible procesar reembolsos por la naturaleza digital del producto.
          </AlertDescription>
        </Alert>

        {/* Refund Conditions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Condiciones de Reembolso
          </h2>
          <div className="grid gap-4">
            {conditions.map((condition, index) => (
              <Card
                key={index}
                className={`border-l-4 ${condition.eligible ? "border-l-green-500" : "border-l-red-500"}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{condition.title}</CardTitle>
                    <Badge
                      variant={condition.eligible ? "default" : "destructive"}
                      className={
                        condition.eligible ? "bg-green-100 text-green-800" : ""
                      }
                    >
                      {condition.eligible ? "Elegible" : "No Elegible"}
                    </Badge>
                  </div>
                  <CardDescription>{condition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm text-secondary-600">
                        Período: {condition.period}
                      </span>
                    </div>
                    {condition.condition && (
                      <span className="text-sm text-yellow-600 font-medium">
                        {condition.condition}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Refund Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Proceso de Reembolso
          </h2>
          <Card>
            <CardContent className="p-6">
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Badge
                      variant="outline"
                      className="min-w-[24px] h-6 rounded-full flex items-center justify-center"
                    >
                      {index + 1}
                    </Badge>
                    <span className="text-secondary-700">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Excluded Items */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Productos Excluidos
          </h2>
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Los siguientes productos NO son elegibles para reembolso:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {excludedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas Solicitar un Reembolso?
          </h3>
          <p className="text-secondary-600 mb-6">
            Nuestro equipo de atención al cliente está disponible para ayudarte
            con tu solicitud de reembolso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support/soporte-247"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-600 h-10 px-4 py-2"
            >
              Solicitar Reembolso
            </a>
            <a
              href="/support/centro-ayuda"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white h-10 px-4 py-2"
            >
              Centro de Ayuda
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
