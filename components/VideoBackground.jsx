import React from "react";
import { motion } from "framer-motion";

const VideoBackground = ({ language }) => {
  // Text translations for English and Arabic
  const translations = {
    english: {
      heading: "Discover what makes our coffee services truly exceptional",
      paragraph: "Ready to indulge? Explore our menu.",
      button: "Explore",
    },
    arabic: {
      heading: "اكتشف الأناقة والنكهات التي تتحدث عن نفسها",
      paragraph: "هل أنت مستعد للاستمتاع؟ استعرض قائمتنا.",
      button: "يستكشف",
    },
  };

  const t = translations[language] || translations.english;

  return (
    <div id="Event" className="relative h-screen">
      {/* Video Background (commented out for now) */}
      {/* <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={Intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Responsive Background Image */}
      <img
        src="https://i.pinimg.com/736x/79/c5/75/79c57564fdd38795bc76993def844bf3.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover md:hidden" // Default (mobile) background image
      />
      <img
        src="https://i.pinimg.com/736x/d6/db/65/d6db650f6bccb78663914369d0ca1925.jpg"
        alt="Responsive Background"
        className="absolute inset-0 w-full h-full object-cover hidden md:block" // Desktop background image
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h3
            className="text-2xl md:text-5xl font-bold bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400 text-transparent bg-clip-text"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.heading}
          </motion.h3>
          <motion.p
            className="mt-4 text-md md:text-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.paragraph}
          </motion.p>
          <a href="hospitality-services-memories">
            <motion.button
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {t.button}
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoBackground;
