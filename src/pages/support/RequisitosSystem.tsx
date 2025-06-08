import {
  Monitor,
  Cpu,
  HardDrive,
  MemoryStick,
  Gamepad2,
  Info,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function RequisitosSystem() {
  const platforms = [
    {
      name: "PC Gaming",
      icon: <Monitor className="w-6 h-6" />,
      requirements: {
        minimum: {
          os: "Windows 10 64-bit",
          processor: "Intel Core i5-4590 / AMD FX 8350",
          memory: "8 GB RAM",
          graphics: "NVIDIA GTX 970 / AMD R9 280X",
          directx: "Version 11",
          storage: "50 GB available space",
          network: "Broadband Internet connection",
        },
        recommended: {
          os: "Windows 11 64-bit",
          processor: "Intel Core i7-8700K / AMD Ryzen 5 3600",
          memory: "16 GB RAM",
          graphics: "NVIDIA RTX 3070 / AMD RX 6700 XT",
          directx: "Version 12",
          storage: "50 GB available space (SSD recommended)",
          network: "Broadband Internet connection",
        },
      },
    },
    {
      name: "Consolas",
      icon: <Gamepad2 className="w-6 h-6" />,
      requirements: {
        playstation: {
          ps5: "Compatibilidad completa con retrocompatibilidad PS4",
          ps4: "Requiere PlayStation 4 (todos los modelos)",
          storage: "Espacio libre variable (5-100 GB dependiendo del juego)",
          network: "PlayStation Network para funciones online",
        },
        xbox: {
          series: "Xbox Series X/S con Smart Delivery",
          one: "Xbox One (todos los modelos)",
          storage: "Espacio libre variable (5-100 GB dependiendo del juego)",
          network: "Xbox Live para funciones online",
        },
        nintendo: {
          switch: "Nintendo Switch (modelo original y OLED)",
          lite: "Nintendo Switch Lite (juegos compatibles)",
          storage: "MicroSD recomendada para juegos digitales",
          network: "Nintendo Switch Online para multijugador",
        },
      },
    },
  ];

  const popularGames = [
    {
      name: "Cyberpunk 2077",
      min: {
        cpu: "Intel i5-3570K",
        gpu: "GTX 780",
        ram: "8 GB",
        storage: "70 GB",
      },
      rec: {
        cpu: "Intel i7-4790",
        gpu: "GTX 1060 6GB",
        ram: "12 GB",
        storage: "70 GB SSD",
      },
    },
    {
      name: "League of Legends",
      min: {
        cpu: "Intel i3-530",
        gpu: "GeForce 9600GT",
        ram: "2 GB",
        storage: "16 GB",
      },
      rec: {
        cpu: "Intel i5-3300",
        gpu: "GeForce GTX 560",
        ram: "4 GB",
        storage: "16 GB",
      },
    },
    {
      name: "Fortnite",
      min: {
        cpu: "Intel i3-3225",
        gpu: "Intel HD 4000",
        ram: "4 GB",
        storage: "26 GB",
      },
      rec: {
        cpu: "Intel i5-7300U",
        gpu: "GTX 960",
        ram: "8 GB",
        storage: "26 GB",
      },
    },
  ];

  const tips = [
    "Actualiza siempre tus drivers gráficos antes de instalar nuevos juegos",
    "Los requisitos mínimos permiten jugar, pero los recomendados ofrecen mejor experiencia",
    "Un SSD mejora significativamente los tiempos de carga",
    "Cierra aplicaciones innecesarias para liberar RAM mientras juegas",
    "Verifica el espacio disponible antes de comprar juegos grandes",
    "La conexión a internet estable es crucial para juegos online",
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Requisitos del Sistema
          </h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Asegúrate de que tu sistema cumple con los requisitos mínimos antes
            de comprar. Consulta las especificaciones técnicas para cada
            plataforma.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Nota importante:</strong> Los requisitos pueden variar según
            el juego específico. Siempre verifica los requisitos individuales en
            la página de cada producto antes de comprar.
          </AlertDescription>
        </Alert>

        {/* Platform Tabs */}
        <Tabs defaultValue="pc" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pc">PC Gaming</TabsTrigger>
            <TabsTrigger value="console">Consolas</TabsTrigger>
          </TabsList>

          <TabsContent value="pc" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Minimum Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">
                    Requisitos Mínimos
                  </CardTitle>
                  <CardDescription>
                    Especificaciones básicas para ejecutar la mayoría de juegos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(platforms[0].requirements.minimum).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-secondary-600 capitalize">
                          {key.replace("_", " ")}:
                        </span>
                        <span className="text-sm font-medium text-right">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </CardContent>
              </Card>

              {/* Recommended Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">
                    Requisitos Recomendados
                  </CardTitle>
                  <CardDescription>
                    Especificaciones para la mejor experiencia de juego
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(platforms[0].requirements.recommended).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-secondary-600 capitalize">
                          {key.replace("_", " ")}:
                        </span>
                        <span className="text-sm font-medium text-right">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="console" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* PlayStation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">PlayStation</CardTitle>
                  <CardDescription>PS4 / PS5</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(platforms[1].requirements.playstation).map(
                    ([key, value]) => (
                      <div key={key}>
                        <span className="text-sm font-medium text-secondary-800 capitalize">
                          {key === "ps5" ? "PS5" : key === "ps4" ? "PS4" : key}:
                        </span>
                        <p className="text-sm text-secondary-600 mt-1">
                          {value}
                        </p>
                      </div>
                    ),
                  )}
                </CardContent>
              </Card>

              {/* Xbox */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Xbox</CardTitle>
                  <CardDescription>Xbox One / Series X|S</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(platforms[1].requirements.xbox).map(
                    ([key, value]) => (
                      <div key={key}>
                        <span className="text-sm font-medium text-secondary-800 capitalize">
                          {key === "series"
                            ? "Series X|S"
                            : key === "one"
                              ? "Xbox One"
                              : key}
                          :
                        </span>
                        <p className="text-sm text-secondary-600 mt-1">
                          {value}
                        </p>
                      </div>
                    ),
                  )}
                </CardContent>
              </Card>

              {/* Nintendo */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Nintendo</CardTitle>
                  <CardDescription>Switch / Switch Lite</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(platforms[1].requirements.nintendo).map(
                    ([key, value]) => (
                      <div key={key}>
                        <span className="text-sm font-medium text-secondary-800 capitalize">
                          {key === "switch"
                            ? "Switch"
                            : key === "lite"
                              ? "Switch Lite"
                              : key}
                          :
                        </span>
                        <p className="text-sm text-secondary-600 mt-1">
                          {value}
                        </p>
                      </div>
                    ),
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Popular Games Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Requisitos de Juegos Populares
          </h2>
          <div className="space-y-4">
            {popularGames.map((game, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{game.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">
                        Mínimo
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>CPU:</span>
                          <span>{game.min.cpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GPU:</span>
                          <span>{game.min.gpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>RAM:</span>
                          <span>{game.min.ram}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Storage:</span>
                          <span>{game.min.storage}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-3">
                        Recomendado
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>CPU:</span>
                          <span>{game.rec.cpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GPU:</span>
                          <span>{game.rec.gpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>RAM:</span>
                          <span>{game.rec.ram}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Storage:</span>
                          <span>{game.rec.storage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Consejos para Optimizar tu Sistema
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <HardDrive className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Tu Sistema No Cumple los Requisitos?
          </h3>
          <p className="text-secondary-600 mb-6">
            Nuestro equipo técnico puede ayudarte a encontrar alternativas o
            recomendarte upgrades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support/soporte-247"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-600 h-10 px-4 py-2"
            >
              Consulta Técnica
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
