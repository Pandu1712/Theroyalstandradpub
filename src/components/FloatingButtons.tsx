import { MessageCircle, ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/447700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 transition-all"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Down Arrow Button */}
      <button
        onClick={() => window.scrollTo({ top:0, behavior: "smooth" })}
        className="w-14 h-14 rounded-full bg-amber-500 shadow-xl flex items-center justify-center hover:scale-110 transition-all"
      >
        <ArrowUp className="w-7 h-7 text-white" />
      </button>

    </div>
  );
};

export default FloatingButtons;
