import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Unique icons for WhatsApp and Call

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(true);

  useEffect(() => {
    // Make buttons visible with a delay for animation
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-4 z-50 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
    {/* Call Button */}
    <a
      href="tel:+971503665518"
      className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full p-4 shadow-lg transform transition-all active:scale-125 hover:-translate-y-3 hover:rotate-12 flex items-center justify-center"
      title="Call us"
    >
      <FaPhoneAlt className="text-2xl animate-pulse" /> {/* Pulsing effect */}
    </a>

      {/* WhatsApp Button */}
      <a
      href="https://wa.me/+971503665518"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-full p-4 shadow-lg transform transition-all active:scale-125 hover:-translate-y-3 hover:rotate-12 flex items-center justify-center custom-shake"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>

    </div>
  );
};

export default FloatingButton;