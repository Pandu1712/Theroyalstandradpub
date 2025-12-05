import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Beer } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Active page detection
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu links with paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 nav-font ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl'
          : 'bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer group nav-font"
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <Beer className="h-10 w-10 text-[#895129] group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-[#895129] rounded-full blur-xl group-hover:bg-[#895129] transition-all duration-300" />
            </div>
            <span className="text-2xl font-bold bg-[#895129] bg-clip-text text-transparent">
              The Royal Standrad Pub
            </span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-font px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  currentPage === link.path
                    ? 'text-[#895129]'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r 
                  from-bg-[#895129] to-bg-[#895129] transform origin-left 
                  transition-transform duration-300 ${
                    currentPage === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}

            {/* CART */}
            <button
              onClick={() => navigate('/cart')}
              className="ml-4 relative p-2 rounded-lg bg-[#895129] hover:bg-bg-[#895129] transition-all duration-300 group"
            >
              <ShoppingCart className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />

              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => navigate('/cart')}
              className="relative p-2 rounded-lg bg-[#895129]"
            >
              <ShoppingCart className="h-6 w-6 text-black" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500  text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#895129] transition-colors duration-300"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-md">

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`nav-font block w-full text-left px-4 py-3 rounded-lg font-medium 
                transition-all duration-300 transform ${
                  currentPage === link.path
                    ? 'bg-[#895129] text-amber-400'
                    : 'text-gray-300 hover:bg-slate-800 hover:text-[#895129] hover:translate-x-2'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
