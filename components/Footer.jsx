import React from "react";
import { FaInstagram, FaWhatsapp, FaSnapchat } from "react-icons/fa";

// Translations object
const translations = {
  english: {
    brand: "Rukn Al-Dyafa",
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    aboutUs: "About Us",
    events: "Events",
    contactUs: "Contact Us",
    copyright: "© Catering Service. All rights reserved."
  },
  arabic: {
    brand: "ركن الضيافة",
    home: "الرئيسية",
    services: "الخدمات",
    gallery: "المعرض",
    aboutUs: "من نحن",
    events: "الفعاليات",
    contactUs: "اتصل بنا",
    copyright: "© خدمة تقديم الطعام. جميع الحقوق محفوظة."
  },
};

function Footer({ language = "english" }) {
  const t = translations[language] || translations.english;

  return (
    <footer className="bg-gray-900 text-white w-full p-6 md:p-8">
      {/* Branding Section */}
      <div className="ml-20 text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-wider uppercase">
          {/* <img src="footerLogo.svg" className="flex items-center justify-center h-36 md:h-46" alt="" /> */}
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 flex justify-center lg:justify-end">
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-3 text-center lg:text-left">
          <a href="/" className="text-gray-400 hover:text-gray-100">
            {t.home}
          </a>
          <a href="/arabic-coffee-services" className="text-gray-400 hover:text-gray-100">
            {t.services}
          </a>
          <a href="/hospitality-services-memories" className="text-gray-400 hover:text-gray-100">
            {t.gallery}
          </a>
          <a href="/about-rukn-al-dyafa" className="text-gray-400 hover:text-gray-100">
            {t.aboutUs}
          </a>
          <a href="/best-arabic-coffee-service" className="text-gray-400 hover:text-gray-100">
            {t.events}
          </a>
          <a href="/contact-us" rel="noreferrer" className="text-gray-400 hover:text-gray-100">
            {t.contactUs}
          </a>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-6 border-gray-700" />

      {/* Social Media and Copyright Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Copyright */}
        <div className="text-center lg:text-left text-gray-500 text-sm mb-4 lg:mb-0">
          <p>{t.copyright}</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/rukn_aldyafa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaInstagram className="text-white text-xl" />
          </a>
          <a
            href="https://wa.me/+917045992776"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
          <a
            href="https://www.snapchat.com/add/ruknaldyafa?sender_web_id=f7b1dbb5-c3c0-48c6-a15b-058b0e4429dc&device_type=desktop&is_copy_url=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <FaSnapchat className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;