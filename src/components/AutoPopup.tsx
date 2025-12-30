import { useEffect, useState } from "react";

const POPUP_DELAY = 30 * 1000;
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

    setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-3 sm:px-6">

      {/* Popup Container */}
      <div
        className="
          relative w-full 
          max-w-[92%] sm:max-w-sm md:max-w-md 
          bg-white rounded-2xl shadow-2xl 
          animate-scaleIn overflow-hidden
        "
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="
            absolute top-3 right-3 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full bg-black/80 text-white
            hover:bg-black transition
          "
        >
          ✕
        </button>

        {/* Poster Image */}
        <img
          src="/NewYearPoster.jpeg"
          alt="New Year Party"
          className="
            w-full 
            object-cover 
            h-[105vh] sm:h-[420px] md:h-[680px]
          "
        />

        {/* Content */}
       {/*  <div className="p-4 sm:p-5 text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
            New Year’s Eve Party 🎉
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Celebrate with music, food & unforgettable vibes.
          </p>

          <button
            onClick={handleClose}
            className="
              w-full rounded-lg
              bg-gradient-to-r from-amber-500 to-orange-600
              py-2.5 text-white font-medium
              hover:opacity-90 transition
            "
          >
            Got It
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AutoPopup;
