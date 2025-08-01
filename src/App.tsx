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
import AcercaDeKingKeys from "./pages/company/AcercaDeKingKeys";
import Contacto from "./pages/company/Contacto";
import UneteEquipo from "./pages/company/UneteEquipo";
import ProgramaAfiliados from "./pages/company/ProgramaAfiliados";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil"; 
import VerifyPage from "./pages/VerifyPage";

import NotFound from "./pages/NotFound";
import "./App.css";
import { ShopContextProvider } from './data/ShopContext';
import { ToastContainer } from "react-toastify";


function TrianguloAcostado() {
  return <div className="triangulo-acostado"></div>;
}

function App() {
  return (
    <ShopContextProvider>
    <CartProvider>
      
      <BrowserRouter>

        {/*  Aquí mostramos el triángulo en todas las páginas 
        <TrianguloAcostado />
<div className="triangulo-izquierdo"></div>*/}
        <ToastContainer/>
        <Routes>
          {/* Main pages */}
          
            <Route path="/" element={<Index />} />
            <Route path="/juegos-pc" element={<JuegosPC />} />
            <Route path="/divisas" element={<Divisas />} />
            <Route path="/dlc" element={<DLC />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/Perfil" element={<Perfil />} />
          
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/team" element={<UneteEquipo />} />
          <Route path="/affiliates" element={<ProgramaAfiliados />} />
          <Route path="/support" element={<CentroAyuda />} />
          <Route path="/verify" element={<VerifyPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CartModal />
      </BrowserRouter>
      
    </CartProvider>
    </ShopContextProvider>
  );
}

export default App;
