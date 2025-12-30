import { CartProvider } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";
import AutoPopup from "./components/AutoPopup";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Services from "./pages/Services";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <CartProvider>
      <ScrollToTop />

      {/* FIXED HEADER */}
      <Header />

      {/* PAGE CONTENT */}
      <main className="bg-slate-90 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <FloatingButtons />
      <AutoPopup />
    </CartProvider>
  );
}

export default App;
