import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  /**
   * Optional SPA navigation handler.
   * If provided, clicking a link will call onNavigate(page)
   * and prevent the browser default navigation (useful for single-page apps).
   *
   * If you prefer normal anchor behavior, call this component without `onNavigate`
   * and update the `href` values below to real paths (e.g. '/about', '/menu').
   */
  onNavigate?: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const quickLinks = [
    { label: "Home", href: "#home", page: "Home" },
    { label: "Menu", href: "#menu", page: "Menu" },
    { label: "About", href: "#about", page: "About" },
    { label: "Services", href: "#services", page: "Services" },
    { label: "Events", href: "#events", page: "Events" },
    { label: "Contact", href: "#contact", page: "Contact" },
  ];

  const handleClick = (e: React.MouseEvent, page: string) => {
    if (onNavigate) {
      // If SPA navigation is provided, prevent default browser navigation
      // so the app's router/state handles the page change.
      e.preventDefault();
      onNavigate(page);
    }
    // If onNavigate is not provided we allow anchor default behavior
    // so you can update hrefs and let standard navigation work.
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-amber-500/20 pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Branding */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              The Royal Standard Pub
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting unforgettable flavors with passion and premium ingredients.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`social-${i}`}
                  className="bg-slate-800/40 p-2 rounded-full hover:bg-slate-700/50 
                    border border-amber-500/20 hover:border-amber-500/40 transition-all cursor-pointer inline-flex"
                >
                  <Icon className="w-5 h-5 text-amber-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.page)}
                    className="hover:text-amber-400 transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>123 London Street, UK 90210</span>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>+44 123 456 789</span>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:support@royalstandardpub.com"
                  className="ml-1 hover:text-amber-400 transition-colors"
                >
                  support@royalstandardpub.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>

            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, offers, and exclusive deals.
            </p>

            <form
              onSubmit={(e) => {
                // Keep default prevented if SPA navigation; otherwise, allow.
                e.preventDefault();
                // You can wire up your subscribe logic here.
                // Currently this is a no-op so you can add your API call later.
              }}
            >
              <div className="flex items-center bg-slate-800/50 border border-amber-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <Mail className="text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-white placeholder-gray-500 flex-1 ml-3 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600
                  rounded-full text-white font-semibold shadow-lg shadow-amber-500/30
                  transition-all hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} The Royal Standard Pub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
