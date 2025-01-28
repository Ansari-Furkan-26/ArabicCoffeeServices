'use client';

import React, { useState, useEffect } from "react";
import About from '@/components/About';
// import Gallery from '@/components/HeroGallery';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import FloatingButton from "@/components/Floating";

const AboutSection = () => {
  const translations = {
    english: {
      header: "Capture the Moment",
      paragraph: "Preserving your most cherished moments, one event at a time. Let us bring your celebrations to life with exquisite catering and attention to detail."
    },
    arabic: {
      header: "التقط اللحظة",
      paragraph: "نحن نحتفظ بأغلى لحظاتك، في كل مناسبة على حدة. دعنا نجعل احتفالاتك حية مع خدمة تقديم الطعام الفاخرة والاهتمام بالتفاصيل."
    }
  };

  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Toggle language and save it to localStorage
  const toggleLanguage = () => {
    const newLanguage = language === "english" ? "arabic" : "english";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Persist language state
  };

  return (
    <div className="bg-gray-100 min-h-screen" id="ExploreMoment">

      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Background image and text about capturing moments */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/ed/5a/77/ed5a77dc9815460f8af4eb394803d727.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">
            {translations[language].header}
          </h2>
          <p className="text-lg">
            {translations[language].paragraph}
          </p>
        </div>
      </section>

      <About language={language} />
      {/* <Gallery language={language} /> */}
      <Footer language={language} />
      <FloatingButton />
    </div>
  );
};

export default AboutSection;