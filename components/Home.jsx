'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";

export default function HomePage({ language, toggleLanguage }) {
  // Manage language state
  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Define image paths
  const images = [
    "/2.jpg",
    "/About.jpg",
    "/51.jpg",
    "/49.jpg",
    "/10.jpg",
    "/home.jpg",
    "/43.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const translations = {
    english: {
      heading: "Flavors that captivate, \n with Arabic coffee that defines hospitality.",
      paragraph:
        "At Rukn Al Dyafa, we redefine hospitality in the UAE with our luxurious Arabic coffee service and premium catering, creating unforgettable moments for every occasion.",
      bookNow: "Book Now",
      SideQuote: "Arabic coffee Service, every season, every story.",
      SideDesc: "Tailored experiences and exclusive setups for exceptional coffee service."
    },
    arabic: {
      heading: "نكهات تأسر القلوب، \nوقهوة عربية ترسم معالم الضيافة.",
      paragraph:
        "في ركن الضيافة، نقدم خدمات الضيافة الفاخرة مع القهوة العربية الفريدة، لنخلق لحظات لا تُنسى لكل مناسبة في الإمارات.",
      bookNow: "احجز الآن",
      SideQuote: "خدمة القهوة العربية، في كل موسم، وفي كل حكاية.",
      SideDesc: "تجارب مصممة بعناية وترتيبات حصرية لخدمة قهوة استثنائية."
    },
  };
  

  const t = translations[language];

  return (
    <div className="relative bg-black min-h-screen flex flex-col">
       <div className="relative bg-black h-screen px-4 sm:px-8">
          {/* Background Marquee for Mobile View */}
          <div className="absolute inset-0 md:hidden overflow-hidden bg-black opacity-70">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100 " : "opacity-0 "}`}>
                <img src={src}
                  alt="Luxury hospitality services in UAE"
                  className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 hidden md:block">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240125/pngtree-arabic-tea-coffee-service-golden-cups-ramadan-holidays-decoration-image_15567931.png"
              alt="Catering Background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Content */}
          <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
            {/* Animated Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl  font-bold leading-tight max-w-4xl"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.heading}
            </motion.h1>

            {/* Animated Paragraph */}
            <motion.p
              className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.paragraph}
            </motion.p>

            {/* Animated Button */}
            <a href="arabic-coffee-services">
              <motion.button
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded shadow-lg transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t.bookNow}
              </motion.button>
            </a>
          </div>

          {/* Social Media and Additional Section */}
          <section className="relative -mt-36 px-4 sm:px-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Social Media Icons */}
            <motion.div
              className="flex gap-4 mb-4 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <a href="https://www.instagram.com/rukn_aldyafa/" rel="noreferrer" target="_blank" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
                <FaInstagram />
              </a>
              <a href="https://wa.me/+971503665518" target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
                <FaWhatsapp />
              </a>
              <a href="https://www.snapchat.com/add/ruknaldyafa?sender_web_id=f7b1dbb5-c3c0-48c6-a15b-058b0e4429dc&device_type=desktop&is_copy_url=true" target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full hover:bg-gray-600 transition">
                <FaSnapchat />
              </a>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="hidden md:block text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-lg sm:text-xl font-semibold max-w-[260px]">
                {t.SideQuote}
              </h2>
              <div className="flex items-start justify-start gap-4 mt-3">
                <div className="flex relative gap-2">
                  <img
                    src="https://i.pinimg.com/736x/9b/ab/8c/9bab8cbbd116aeef9f73df374ed5ae4a.jpg"
                    alt="Luxury hospitality services in UAE"
                    className="w-10 h-10 rounded-full object-cover border border-white"
                  />
                  <img
                    src="https://i.pinimg.com/736x/c3/18/cf/c318cff66485cf5034448bdf3e48f253.jpg"
                    alt="Luxury hospitality services in UAE"
                    className="w-10 h-10 rounded-full object-cover border border-white"
                    style={{ marginLeft: "-15px" }}
                  />
                </div>
                <p className="text-xs sm:text-sm -mt-2 max-w-[180px]">
                  {t.SideDesc}
                </p>
              </div>
            </motion.div>
          </section>
      </div>
    </div>
  );
}