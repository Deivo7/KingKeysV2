import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contacto() {
  const contactInfo = [
    {
      title: "Dirección",
      content: "123 Gaming Blvd, Cyber City, GC 12345",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      title: "Teléfono",
      content: "+1 (555) GAMING-24",
      icon: <Phone className="w-6 h-6 text-primary" />,
    },
    {
      title: "Email",
      content: "soporte@kingkeys-gaming.com",
      icon: <Mail className="w-6 h-6 text-primary" />,
    },
    {
      title: "Horario",
      content: "Lun-Dom: 8:00 AM - 12:00 AM",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
  ];

  const departments = [
    { value: "soporte", label: "Soporte Técnico" },
    { value: "ventas", label: "Ventas y Consultas" },
    { value: "alianzas", label: "Alianzas Comerciales" },
    { value: "prensa", label: "Prensa y Medios" },
    { value: "otro", label: "Otro" },
  ];

  const offices = [
    {
      city: "Ciudad de Panamá",
      address: "123 Gaming Blvd, Cyber City",
      phone: "+507 123-4567",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      city: "Miami",
      address: "456 Tech Avenue, Miami, FL",
      phone: "+1 (305) 123-4567",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
    {
      city: "São Paulo",
      address: "789 Gamer Street, São Paulo, SP",
      phone: "+55 11 1234-5678",
      image:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            ¿Tienes preguntas, sugerencias o quieres colaborar con nosotros?
            Estamos aquí para ayudarte. Elige la forma que prefieras para
            contactarnos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Envía tu Mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y te responderemos en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Tu apellido" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu-email@ejemplo.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Departamento</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe tu consulta o comentario..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {info.icon}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-secondary-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary-50 border-primary-200">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  ¿Necesitas Ayuda Inmediata?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-700 mb-4">
                  Para soporte técnico urgente, usa nuestro chat en vivo
                  disponible 24/7
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Iniciar Chat en Vivo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Offices Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestras Oficinas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">
                        {office.city}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-secondary-600 text-sm">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <p className="text-secondary-600 text-sm">
                        {office.phone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Preguntas Frecuentes</CardTitle>
            <CardDescription>
              Encuentra respuestas rápidas a las consultas más comunes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Cuál es el tiempo de respuesta?
                </h4>
                <p className="text-secondary-600 text-sm mb-4">
                  Respondemos todos los emails en menos de 24 horas. Para
                  consultas urgentes, usa nuestro chat en vivo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Atienden en español?
                </h4>
                <p className="text-secondary-600 text-sm mb-4">
                  Sí, nuestro equipo de soporte habla español, inglés, portugués
                  y francés.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Puedo visitar sus oficinas?
                </h4>
                <p className="text-secondary-600 text-sm mb-4">
                  Por seguridad, las visitas requieren cita previa. Contacta
                  primero por email.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  ¿Manejan consultas comerciales?
                </h4>
                <p className="text-secondary-600 text-sm mb-4">
                  Sí, tenemos un departamento especializado en alianzas y
                  oportunidades comerciales.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Visítanos en Panamá
          </h3>
          <p className="text-secondary-600 mb-6">
            Nuestra oficina principal está ubicada en el corazón del distrito
            tecnológico de la ciudad.
          </p>
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <p className="text-secondary-500">Mapa interactivo aquí</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
