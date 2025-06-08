import { Search, MessageCircle, Book, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CentroAyuda() {
  const helpTopics = [
    {
      title: "Cómo Canjear Claves",
      description: "Guía paso a paso para canjear tus claves de juegos",
      icon: <Book className="w-6 h-6" />,
      link: "/support/canjear-claves",
    },
    {
      title: "Política de Reembolso",
      description: "Información sobre devoluciones y reembolsos",
      icon: <MessageCircle className="w-6 h-6" />,
      link: "/support/politica-reembolso",
    },
    {
      title: "Requisitos del Sistema",
      description: "Especificaciones técnicas para juegos",
      icon: <HelpCircle className="w-6 h-6" />,
      link: "/support/requisitos-sistema",
    },
    {
      title: "Soporte 24/7",
      description: "Contacta con nuestro equipo de soporte",
      icon: <MessageCircle className="w-6 h-6" />,
      link: "/support/soporte-247",
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto tiempo tardan en llegar mis claves?",
      answer:
        "Las claves digitales se entregan instantáneamente a tu email después del pago exitoso.",
    },
    {
      question: "¿Puedo jugar en cualquier región?",
      answer:
        "La mayoría de nuestros juegos son sin restricciones regionales, pero siempre verificamos esta información en la página del producto.",
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos tarjetas de crédito/débito, PayPal, y métodos de pago locales según tu región.",
    },
    {
      question: "¿Ofrecen garantía en los productos?",
      answer:
        "Sí, todos nuestros productos digitales tienen garantía de funcionamiento 100%.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Centro de Ayuda
          </h1>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            ¿Necesitas ayuda? Encuentra respuestas rápidas a tus preguntas más
            frecuentes o contacta con nuestro equipo de soporte especializado.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <Input
                placeholder="Buscar en la ayuda..."
                className="pl-12 h-12 text-base"
              />
            </div>
          </div>
        </div>

        {/* Help Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Temas de Ayuda
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpTopics.map((topic, index) => (
              <Link key={index} to={topic.link}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{topic.icon}</div>
                    </div>
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
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

        {/* Contact Support */}
        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-secondary-600 mb-6">
            Nuestro equipo de soporte está disponible 24/7 para ayudarte con
            cualquier consulta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/soporte-247">
              <Button className="bg-primary hover:bg-primary-600 text-white">
                Contactar Soporte
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Enviar Email
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
