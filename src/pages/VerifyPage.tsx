import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "@/contexts/CartContext";

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [message, setMessage] = useState("Verificando tu pago...");
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
  // Ref para que solo verifique una vez
  const hasVerified = useRef(false);

  useEffect(() => {
    if (hasVerified.current) return; // ya verificó antes, no repetir
    const orderId = searchParams.get("orderId");
    const success = searchParams.get("success");

    if (!orderId || !success) {
      setMessage("No hay parámetros para verificar el pago.");
      setLoading(false);
      return;
    }

    hasVerified.current = true;

    const verifyPayment = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/order/verify?orderId=${orderId}&success=${success}`
        );

        if (res.data.success) {
          setMessage("✅ ¡Gracias por tu compra! Tu pago ha sido confirmado.");
          await clearCart();
        } else {
          setMessage("❌ El pago fue cancelado o falló.");
        }
      } catch (error) {
        console.error("Error verificando el pago:", error);
        setMessage("❌ Ocurrió un error al verificar el pago.");
      } finally {
        setLoading(false);
        setRedirecting(true);

        // Después de mostrar mensaje, navegamos al home
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 4000);
      }
    };

    verifyPayment();
  }, [searchParams, backendUrl, navigate, clearCart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-2xl font-semibold mb-4">Verificación de Pago</h1>
      <p className="text-lg text-gray-700">{loading ? "⏳ " + message : message}</p>
      {!loading && redirecting && (
        <p className="mt-4 text-gray-500">Redirigiendo al home...</p>
      )}
    </div>
  );
};

export default VerifyPage;
