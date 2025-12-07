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
            <h2 className="text-3xl font-bold bg-[#895129] bg-clip-text text-transparent">
              The Royal Standard Pub
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting unforgettable flavors with passion and premium ingredients.
            </p>

            {/* Social Icons */}
           {/* Social Icons */}
<div className="flex space-x-4 mt-4">
  <a
    href="https://www.facebook.com/share/16TQ2VHUpZ/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="facebook"
    className="bg-slate-800/40 p-2 rounded-full hover:bg-slate-700/50 
      border border-[#895129] hover:border-amber-500/40 transition-all cursor-pointer inline-flex"
  >
    <Facebook className="w-5 h-5 text-[#895129]" />
  </a>

  <a
    href="https://www.instagram.com/theroyalstandardpub_?igsh=MXNsMnBlbXlraG50ZA%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="instagram"
    className="bg-slate-800/40 p-2 rounded-full hover:bg-slate-700/50 
      border border-amber-500/20 hover:border-amber-500/40 transition-all cursor-pointer inline-flex"
  >
    <Instagram className="w-5 h-5 text-[#895129]" />
  </a>

  <a
    href="https://twitter.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="twitter"
    className="bg-slate-800/40 p-2 rounded-full hover:bg-slate-700/50 
      border border-amber-500/20 hover:border-amber-500/40 transition-all cursor-pointer inline-flex"
  >
    <Twitter className="w-5 h-5 text-[#895129]" />
  </a>
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
                    className="hover:text-[#895129] transition-colors cursor-pointer block"
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
                <MapPin className="w-5 h-5 text-[#895129] flex-shrink-0" />
                <span>86 Tanner’s hill, London, SE8 4PN</span>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#895129] flex-shrink-0" />
                <span>+44 738 745 846 3</span>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#895129] flex-shrink-0" />
                <a
                  href="mailto:theroyalarpr@gmail.com
"
                  className="ml-1 hover:text-[#895129] transition-colors"
                >
                 theroyalarpr@gmail.com

                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Pub Timings</h3>

            <p className="text-gray-400">Monday: 12:00 PM – 2:00 AM</p>
<p className="text-gray-400">Tuesday: 12:00 PM – 11:00 PM</p>
<p className="text-gray-400">Wednesday: 12:00 PM – 11:00 PM</p>
<p className="text-gray-400">Thursday: 12:00 PM – 11:00 PM</p>
<p className="text-gray-400">Friday: 12:00 PM – 2:00 AM</p>
<p className="text-gray-400">Saturday: 12:00 PM – 2:00 AM</p>
<p className="text-gray-400">Sunday: 12:00 PM – 11:00 AM</p>

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
