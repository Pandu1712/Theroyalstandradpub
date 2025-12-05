import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Handle phone number typing (ONLY NUMBERS)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      setPhoneError('Only numbers are allowed');
      return;
    }

    setPhoneError('');
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (phoneError || formData.phone.length < 7) {
      setPhoneError('Enter a valid phone number');
      return;
    }

    // WhatsApp Redirect
    const whatsappNumber = "447438375330"; // ← Business WhatsApp number (WITHOUT +)
    const message = `New Contact Message:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // Show Confirmation Message
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-[#895129] bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Info Section */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#895129] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-gray-400">86 Tanner’s hill</p>
                      <p className="text-gray-400">London, UK</p>
                      <p className="text-gray-400">SE8 4PN</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#895129] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">+44 7387458463</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#895129] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">theroyalarpr@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-[#895129] w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Opening Hours</h3>
                      <p className="text-gray-400">Mon–Fri: 9:00 AM – 12:00 AM</p>
                      <p className="text-gray-400">Saturday: 9:00 AM – 12:00 AM</p>
                      <p className="text-gray-400">Sunday: 9:00 AM – 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1764930917739!6m8!1m7!1sS80aedYbJ6MSbZTioM9Vfg!2m2!1d51.47349981384547!2d-0.02710474347788792!3f324.75424460431657!4f10.974388489208621!5f0.4000000000000002"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Form Section */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      required
                      maxLength={15}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white"
                      placeholder="Only numbers allowed"
                    />

                    {phoneError && (
                      <p className="text-red-400 text-sm mt-1">{phoneError}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-700/50 border border-amber-500/20 rounded-lg text-white resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Confirmation */}
                  {isSubmitted && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400">
                      Your message has been sent to WhatsApp successfully!
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#895129] text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
