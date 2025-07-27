// OrderGrid.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import { ShoppingBag } from "lucide-react";
import { toast } from "react-toastify";

export default function OrderGrid() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [orders, setOrders] = useState([]);
  //const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
            // No hay token, no hacer petición ni mostrar error de toast
            setOrders([]); // o cualquier estado inicial
            return;
        }
        const response = await axios.get(backendUrl+'/api/order/userOrder',{ // Ajusta el endpoint
            headers: { token },
        });
        if (response.data.success) {
            setOrders(response.data.orders);
        } else {
            toast.error("La respuesta del servidor no contiene productos");
        }
      } catch (error) {
        console.error("Error al obtener órdenes", error);
      }
    };
    fetchOrders();
  }, []);

  if (!orders.length) {
    return (
      <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 md:p-12 text-center">
        <ShoppingBag className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-muted-foreground mb-2">
            No hay compras registradas
        </h3>
        <p className="text-sm text-muted-foreground/70 max-w-md mx-auto">
            Cuando realices tu primera compra, aparecerá aquí junto con
            todos los detalles y el historial de tus transacciones.
        </p>
    </div>
);
  }

  return (
    <div className="h-[500px] overflow-y-auto pr-2">
        <div className="grid gap-4">
            {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
            ))}
        </div>
    </div>
  );
}