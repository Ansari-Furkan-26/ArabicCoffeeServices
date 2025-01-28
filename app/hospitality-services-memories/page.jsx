// app/gallery/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from 'next-seo';
import FloatingButton from "@/components/Floating";

// Manually import images from the public/images folder
const sampleImages = Array.from({ length: 51 }, (_, index) => ({
  id: index + 1,
  src: `/${index + 1}.jpg`, // Automatically generate paths from 1.jpg to 51.jpg
  alt: `Arabic coffee service ${index + 1}`,
}));
export default function GalleryPage() {
  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load the language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  const translations = {
    english: {
      header: "Capture the joy of every sip",
      description:
        "Preserving your most cherished moments, one event at a time. Let us bring your celebrations to life with exquisite catering and attention to detail.",
      sectionTitle: "Catering Experience",
      sectionDescription:
        "Explore a dynamic showcase of our culinary artistry, where each beverage tells a story, and every event is designed to offer a flavorful, memorable journey. Dive into the world of taste and creativity, and let us bring your next celebration to life with our personalized catering services.",
    },
    arabic: {
      header: "التقط فرحة كل رشفة",
      description:
        "نحن نحفظ لحظاتك الثمينة، حدثًا تلو الآخر. دعونا نجعل احتفالاتك حية مع خدمة تقديم الطعام الفاخرة والاهتمام بالتفاصيل.",
      sectionTitle: "تجربة تقديم الطعام",
      sectionDescription:
        "استكشف عرضًا ديناميكيًا لفن الطهي لدينا، حيث تروي كل مشروب قصة، وكل حدث مصمم لتقديم رحلة لذيذة ولا تُنسى. اغمر في عالم النكهة والإبداع، ودعنا نجعل احتفالك القادم ينبض بالحياة مع خدمات تقديم الطعام المخصصة لدينا.",
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {/* Header */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/c0/dc/49/c0dc498d4b9c855c8e299498ea2b2ea4.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">{translations[language].header}</h2>
          <p className="text-lg">{translations[language].description}</p>
        </div>
      </section>

      {/* Section Header */}
      <header className="flex flex-col items-center justify-center text-center text-gray-800 pt-14 pb-8">
        <h1 className="text-3xl font-bold mb-2">{translations[language].sectionTitle}</h1>
        <h2 className="px-2 text-sm max-w-3xl lg:text-md text-gray-600">
          {translations[language].sectionDescription}
        </h2>
      </header>

      {/* Image Gallery */}
      <div className="gallery columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 px-2 pb-2 md:px-24">
        {sampleImages.map((image) => (
          <div key={image.id} className="mb-2 break-inside-avoid">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full rounded-lg hover:shadow-lg hover:opacity-90 transition-all"
            />
          </div>
        ))}
      </div>

      <Footer language={language} />
      <FloatingButton />
    </div>
  );
}