import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { CartModal } from "./components/CartModal";
import { Index } from "./pages/Index";
import { Divisas } from "./pages/Divisas";
import { GiftCards } from "./pages/GiftCards";
import { ProductDetail } from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/divisas" element={<Divisas />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CartModal />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
