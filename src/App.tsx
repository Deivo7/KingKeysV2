import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { CartModal } from "./components/CartModal";
import { Index } from "./pages/Index";
import { JuegosPC } from "./pages/JuegosPC";
import { Divisas } from "./pages/Divisas";
import { DLC } from "./pages/DLC";
import { GiftCards } from "./pages/GiftCards";
import { ProductDetail } from "./pages/ProductDetail";

// Support pages
import { CentroAyuda } from "./pages/support/CentroAyuda";
import { CanjearClaves } from "./pages/support/CanjearClaves";
import { PoliticaReembolso } from "./pages/support/PoliticaReembolso";
import { Soporte247 } from "./pages/support/Soporte247";
import { RequisitosSystem } from "./pages/support/RequisitosSystem";

// Company pages
import { AcercaDeKingKeys } from "./pages/company/AcercaDeKingKeys";
import { Contacto } from "./pages/company/Contacto";
import { UneteEquipo } from "./pages/company/UneteEquipo";
import { ProgramaAfiliados } from "./pages/company/ProgramaAfiliados";

import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/juegos-pc" element={<JuegosPC />} />
          <Route path="/divisas" element={<Divisas />} />
          <Route path="/dlc" element={<DLC />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Support pages */}
          <Route path="/support/centro-ayuda" element={<CentroAyuda />} />
          <Route path="/support/canjear-claves" element={<CanjearClaves />} />
          <Route
            path="/support/politica-reembolso"
            element={<PoliticaReembolso />}
          />
          <Route path="/support/soporte-247" element={<Soporte247 />} />
          <Route
            path="/support/requisitos-sistema"
            element={<RequisitosSystem />}
          />

          {/* Company pages */}
          <Route
            path="/company/acerca-de-kingkeys"
            element={<AcercaDeKingKeys />}
          />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/company/unete-equipo" element={<UneteEquipo />} />
          <Route
            path="/company/programa-afiliados"
            element={<ProgramaAfiliados />}
          />

          {/* Alias routes for footer links */}
          <Route path="/about" element={<AcercaDeKingKeys />} />
          <Route path="/team" element={<UneteEquipo />} />
          <Route path="/affiliates" element={<ProgramaAfiliados />} />
          <Route path="/support" element={<CentroAyuda />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CartModal />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
