import { Key, Download, CheckCircle, AlertCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function CanjearClaves() {
  const platforms = [
    {
      name: "Steam",
      steps: [
        'Abre Steam y ve a "Juegos" → "Activar un producto en Steam"',
        "Acepta el Acuerdo de Suscriptor de Steam",
        "Introduce tu clave de producto de 15 caracteres",
        'Haz clic en "Siguiente" y sigue las instrucciones',
        "El juego aparecerá en tu biblioteca",
      ],
      icon: "🎮",
    },
    {
      name: "Epic Games",
      steps: [
        "Inicia Epic Games Launcher",
        "Ve a tu biblioteca y haz clic en el ícono de tu perfil",
        'Selecciona "Canjear código"',
        "Introduce tu clave de 16 dígitos",
        'Haz clic en "Canjear" para añadir el juego',
      ],
      icon: "🚀",
    },
    {
      name: "PlayStation",
      steps: [
        'En PS5/PS4: Ve a PlayStation Store → "Canjear códigos"',
        "En PC: Inicia sesión en store.playstation.com",
        "Introduce tu código de 12 dígitos",
        "Confirma el canje",
        "Descarga desde tu biblioteca",
      ],
      icon: "🎯",
    },
    {
      name: "Xbox",
      steps: [
        'En Xbox: Presiona el botón Xbox → "Juegos y aplicaciones" → "Canjear código"',
        "En PC: Ve a microsoft.com/redeem",
        "Introduce tu código de 25 caracteres",
        'Haz clic en "Canjear"',
        "Instala desde Xbox Game Pass o Microsoft Store",
      ],
      icon: "🎮",
    },
  ];

  const tips = [
    "Verifica que el juego sea compatible con tu región antes de canjearlo",
    "Guarda siempre una copia de tu clave antes de canjearla",
    "Asegúrate de tener espacio suficiente para la descarga",
    "Si tienes problemas, contacta al soporte de la plataforma correspondiente",
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Key className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cómo Canjear Claves
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Guía paso a paso para activar tus juegos en las principales
            plataformas digitales. Sigue las instrucciones específicas para cada
            plataforma.
          </p>
        </div>

        {/* Important Alert */}
        <Alert className="mb-8 border-yellow-200 bg-yellow-50">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>Importante:</strong> Una vez canjeada, la clave no se puede
            transferir a otra cuenta. Asegúrate de estar logueado en la cuenta
            correcta antes de proceder.
          </AlertDescription>
        </Alert>

        {/* Platform Instructions */}
        <div className="grid gap-8 mb-12">
          {platforms.map((platform, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <CardDescription>
                      Instrucciones para activar en {platform.name}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ol className="space-y-3">
                  {platform.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <Badge
                        variant="outline"
                        className="min-w-[24px] h-6 rounded-full flex items-center justify-center"
                      >
                        {stepIndex + 1}
                      </Badge>
                      <span className="text-secondary-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Consejos Importantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <Download className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Problemas al Canjear?
          </h3>
          <p className="text-secondary-600 mb-6">
            Si tienes dificultades para canjear tu clave, nuestro equipo de
            soporte está aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support/soporte-247"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-600 h-10 px-4 py-2"
            >
              Contactar Soporte
            </a>
            <a
              href="/support/centro-ayuda"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white h-10 px-4 py-2"
            >
              Volver al Centro de Ayuda
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
