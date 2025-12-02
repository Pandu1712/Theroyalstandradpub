import { useState } from 'react';
import { CartProvider } from './context/CartContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Services from './pages/Services';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleNavigate = (page: string, itemId?: string) => {
    setCurrentPage(page);

    if (itemId) {
      setSelectedItemId(itemId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;

      case 'Menu':
        return <Menu onNavigate={handleNavigate} />;

      case 'ProductDetail':
        return selectedItemId ? (
          <ProductDetail itemId={selectedItemId} onNavigate={handleNavigate} />
        ) : (
          <Menu onNavigate={handleNavigate} />
        );

      case 'Cart':
        return <Cart onNavigate={handleNavigate} />;

      case 'Checkout':
        return <Checkout onNavigate={handleNavigate} />;

      case 'Services':
        return <Services onNavigate={handleNavigate} />;

      case 'Events':
        return <Events onNavigate={handleNavigate} />;

      case 'About':
        return <About onNavigate={handleNavigate} />;

      case 'Contact':
        return <Contact onNavigate={handleNavigate} />;

      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-900 flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Page Content */}
        <div className="flex-grow">
          {renderPage()}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
