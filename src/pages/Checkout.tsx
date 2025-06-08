import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Shield, Check, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

export function Checkout() {
  const { state: cartState, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [processingPayment, setProcessingPayment] = useState(false);

  const handlePayment = async () => {
    setProcessingPayment(true);
    // Simular procesamiento de pago
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setProcessingPayment(false);
    // Aquí podrías redirigir a una página de confirmación
    alert("¡Pago procesado exitosamente! Recibirás tus claves por email.");
  };

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.07; // 7% impuesto
  const total = subtotal + tax;

  if (cartState.items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Carrito Vacío
            </h1>
            <p className="text-secondary-600 mb-8">
              No tienes productos en tu carrito. ¡Explora nuestros juegos y
              divisas!
            </p>
            <Link to="/divisas">
              <Button className="bg-primary hover:bg-primary-600 text-white">
                Explorar Productos
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary-600 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a la tienda
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-secondary-600">
            Completa tu compra de forma segura
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Payment Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Necesitamos tu email para enviarte las claves de los juegos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu-email@ejemplo.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Tu apellido" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Método de Pago</CardTitle>
                <CardDescription>
                  Selecciona tu método de pago preferido
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Payment Options */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-primary"
                    />
                    <label
                      htmlFor="card"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <CreditCard className="w-4 h-4" />
                      Tarjeta de Crédito/Débito
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-primary"
                    />
                    <label
                      htmlFor="paypal"
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                      PayPal
                    </label>
                  </div>
                </div>

                {/* Card Details */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-6">
                    <div>
                      <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Vencimiento</Label>
                        <Input id="expiry" placeholder="MM/AA" required />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                      <Input
                        id="cardName"
                        placeholder="Como aparece en tu tarjeta"
                        required
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Pago 100% Seguro
                </p>
                <p className="text-xs text-green-600">
                  Tus datos están protegidos con encriptación SSL de 256 bits
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
                <CardDescription>
                  Revisa tus productos antes de completar la compra
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartState.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-secondary-600">
                          Cantidad: {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Impuestos</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">
                      Entrega Instantánea
                    </span>
                  </div>
                  <p className="text-xs text-blue-600">
                    Recibirás tus claves por email inmediatamente después del
                    pago
                  </p>
                </div>

                {/* Checkout Button */}
                <Button
                  className="w-full bg-primary hover:bg-primary-600 text-white text-lg py-3"
                  onClick={handlePayment}
                  disabled={processingPayment}
                >
                  {processingPayment ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Procesando Pago...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" />
                      Completar Pago - ${total.toFixed(2)}
                    </div>
                  )}
                </Button>

                <p className="text-xs text-center text-secondary-600">
                  Al completar tu compra aceptas nuestros{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Términos y Condiciones
                  </Link>
                </p>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium">Pago Seguro</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium">Entrega Inmediata</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <Check className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-medium">Claves Originales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
