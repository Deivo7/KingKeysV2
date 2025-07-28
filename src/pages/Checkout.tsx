import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { CreditCard, Shield, ArrowLeft, Check } from "lucide-react";
/*
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}
*/
interface FormErrors {
  [key: string]: string;
}

export default function Checkout() {
  const [method, setMethod] = useState('stripe');
  const { state, clearCart, getTotalPrice } = useCart();
  const cartItems = state.items;
  const total = getTotalPrice();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  /*
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  */
  const [errors, setErrors] = useState<FormErrors>({});

  console.log("aqui estos son los productos almacenados",cartItems);
  
/*
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email no es válido";
    }

    if (!formData.firstName) newErrors.firstName = "Nombre es requerido";
    if (!formData.lastName) newErrors.lastName = "Apellido es requerido";
    if (!formData.phone) newErrors.phone = "Teléfono es requerido";

   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
*//*
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
*/
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  //esto se activa al tocar pagar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      // Preparar datos para enviar al backend
      const userId = Number(localStorage.getItem("userId")); // o como tengas el id del usuario guardado
      const amount = total;
      const itemsToSend = cartItems.map(item => ({
        productId: item.id,
        name: item.title,
        image: item.image,
        quantity: item.quantity,
        price: item.price,
      }));

      const orderData = {
        amount,
        items: itemsToSend,
      };
      const token = localStorage.getItem("token");
      console.log("Enviando a backend:", orderData);
      const response = await fetch(backendUrl+'/api/order/stripe', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token, // si usas auth
        },
        body: JSON.stringify({
          userId,
          amount,
          items: itemsToSend,
        }),
      });
      console.log("Item to send:", itemsToSend);
      const data = await response.json();

      if (data.success && data.session_url) {
        // Redirigir a Stripe Checkout
        window.location.href = data.session_url;
      } else {
        alert("Error al crear la sesión de pago. Intenta de nuevo.");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Error en el pago:", error);
      alert("Error en el proceso de pago. Intenta más tarde.");
      setIsProcessing(false);
    }
  };


  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/Login");
    }
  }, [navigate]);

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-600 mb-6">
            Agrega algunos productos a tu carrito antes de proceder al pago.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-[#006D5B] hover:bg-[#005248]"
          >
            Continuar Comprando
          </Button>
        </div>
      </Layout>
    );
  }

  if (orderComplete) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-green-800 mb-2">
              ¡Pago Completado!
            </h1>
            <p className="text-green-600 mb-6">
              Tu pedido ha sido procesado exitosamente. Recibirás las claves
              digitales por email en los próximos minutos.
            </p>
            <p className="text-sm text-gray-500">
              Redirigiendo a la página principal...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-[#006D5B] hover:text-[#005248]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Información de Pago
                </CardTitle>
              </CardHeader>
              <CardContent>
                
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className='flex flex-col lg:flex-row mt-10 justify-center'>
                    <div onClick={() => setMethod('stripe')} className='lg:w-1/2 flex items-center gap-3 border p-8 px-3 cursor-pointer'>
                      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
                      <img className='h-8 mx-7 ' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png"} alt="" />
                    </div>
                    {/*
                    <div onClick={() => setMethod('razorpay')} className='lg:w-1/2 flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
                      <img className='h-8 mx-7 ' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"} alt="" />
                    </div>*/}
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                    <Shield className="w-4 h-4 text-green-600" />
                    Tu información está protegida con encriptación SSL de 256
                    bits
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#006D5B] hover:bg-[#005248] py-3 font-semibold"
                    disabled={isProcessing}
                  >
                    {isProcessing
                      ? "Procesando Pago..."
                      : `Pagar $${total.toFixed(2)}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium text-sm">{item.title}</h4>
                          <p className="text-gray-600 text-sm">
                            Cantidad: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Impuestos:</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <p className="font-medium text-blue-800 mb-1">
                      Entrega Instantánea
                    </p>
                    <p className="text-blue-600">
                      Recibirás las claves digitales por email inmediatamente
                      después del pago.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
