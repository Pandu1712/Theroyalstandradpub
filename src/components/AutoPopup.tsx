import { useEffect, useState } from "react";

const POPUP_DELAY = 3000;
const STORAGE_KEY = "lastPopupClosedTime";

const AutoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!lastClosed || now - Number(lastClosed) > POPUP_DELAY) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsOpen(false);

    setTimeout(() => setIsOpen(true), POPUP_DELAY);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 py-6">

      {/* POPUP CONTAINER */}
      <div
        className="
          relative w-full max-w-sm 
          bg-white rounded-2xl shadow-2xl 
          overflow-hidden flex flex-col
          max-h-[90vh]
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="
            absolute top-3 right-3 z-[999]
            w-10 h-10
            rounded-full
            bg-black text-white
            flex items-center justify-center
            text-lg font-bold
            active:scale-95
            transition
          "
        >
          ✕
        </button>

        {/* IMAGE */}
        <div className="relative w-full pointer-events-none">
          <img
            src="/NewYearPoster.jpeg"
            alt="New Year Party"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            New Year’s Eve Party 🎉
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Celebrate with music, food & unforgettable vibes.
          </p>

          <button
            onClick={handleClose}
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:opacity-90 transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoPopup;
