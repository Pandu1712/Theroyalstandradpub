import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 nav-font mt-8 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-2xl"
          : "bg-slate-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* ================= LOGO + BRAND ================= */}
          <div
            className="flex items-center gap-3 cursor-pointer group mt-2"
            onClick={() => navigate("/")}
          >
            {/* Logo */}
            <div className="relative flex-shrink-0
              w-10 h-10
              sm:w-12 sm:h-12
              md:w-14 md:h-14
              lg:w-16 lg:h-16
            ">
              <div className="absolute inset-0 rounded-full bg-[#895129] blur-xl opacity-60 group-hover:opacity-90 transition-all duration-300" />
              <img
                src="/THE ROYAL.jpg"
                alt="The Royal Standard Pub Logo"
                className="relative w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Brand Name */}
            <span
              className="
                font-bold whitespace-nowrap
                bg-[#895129] bg-clip-text text-transparent
                leading-tight

                text-sm
                sm:text-base
                md:text-lg
                lg:text-2xl
                xl:text-3xl
                2xl:text-4xl
              "
            >
              The Royal Standard Pub
            </span>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  currentPage === link.path
                    ? "text-[#895129]"
                    : "text-gray-300 hover:text-[#895129]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#895129]
                  transform origin-left transition-transform duration-300 ${
                    currentPage === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}

            {/* ===== DESKTOP CART ===== */}
            <button
              onClick={() => navigate("/cart")}
              className="
                ml-4 relative rounded-lg bg-[#895129]
                transition-all duration-300 group

                p-2
                sm:p-2.5
                md:p-3
                lg:p-3.5
              "
            >
              <ShoppingCart
                className="
                  text-white transition-transform duration-300 group-hover:scale-110
                  w-5 h-5
                  sm:w-6 sm:h-6
                  md:w-7 md:h-7
                  lg:w-6 lg:h-6
                "
              />

              {getCartCount() > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    bg-red-500 text-white font-bold rounded-full
                    flex items-center justify-center animate-pulse

                    text-[10px] w-4 h-4
                    sm:text-xs sm:w-5 sm:h-5
                    md:text-sm md:w-6 md:h-6
                  "
                >
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="md:hidden flex items-center gap-4">

            {/* MOBILE CART */}
            <button
              onClick={() => navigate("/cart")}
              className="relative rounded-lg bg-[#895129] p-2"
            >
              <ShoppingCart className="text-black w-5 h-5 sm:w-6 sm:h-6" />

              {getCartCount() > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    bg-red-500 text-white font-bold rounded-full
                    flex items-center justify-center
                    text-[10px] w-4 h-4
                    sm:text-xs sm:w-5 sm:h-5
                  "
                >
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* MENU TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#895129] transition-colors duration-300"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-md">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                currentPage === link.path
                  ? "bg-[#895129] text-black"
                  : "text-gray-300 hover:bg-slate-800 hover:text-[#895129]"
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
