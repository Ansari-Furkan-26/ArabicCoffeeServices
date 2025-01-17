'use client';

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import ConatctForm from "@/components/ContactForm";
import FloatingButton from "@/components/Floating";

const AboutSection = () => {
  const translations = {
    english: {
      header: "Get in Touch",
      paragraph: "We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.",
    },
    arabic: {
        header: "تواصل معنا",
        paragraph: "نود أن نسمع منك! يرجى ملء النموذج أدناه وسنعود إليك في أقرب وقت ممكن.",
    }
  };

  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
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
        className="relative bg-cover bg-top h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/ff/61/64/ff61648d86c416d2cc1fa85f4c253e7a.jpg')`,
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

      <ConatctForm language={language} />
      <Footer language={language} />
      <FloatingButton />
    </div>
  );
};

export default AboutSection;
