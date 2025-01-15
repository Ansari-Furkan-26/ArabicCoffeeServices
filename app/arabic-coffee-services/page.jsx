'use client'
import React, { Suspense, useState } from "react";
import OrderForm from "@/components/OrderForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextSeo } from 'next-seo';

const LuxuryServices = () => {
  const translations = {
    english: {
      heading: "Experience luxury with our premium drink selection",
      paragraph:
        "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering.",
    },
    arabic: {
      heading: "اختبر الفخامة مع اختيار مشروباتنا الفاخرة",
      paragraph:
        " في ركن الضيافة، نقدم أناقة الضيافة التقليدية من خلال تقديم الطعام الفاخر.",
    },
  }; 

  const [language, setLanguage] = useState("english");
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      const toggleLanguage = () => {
        setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
      };

  return (
    <div>
       {/* <NextSeo
        title="Rukn Al Dyafa - Luxury Services & Experiences"
        description="Indulge in exclusive luxury catering services in the UAE. From signature drinks to gourmet treats, we create memorable dining experiences."
        canonical="https://www.ruknaldyafa.ae/luxury-hospitality-services"
        openGraph={{
          url: 'https://www.ruknaldyafa.ae/luxury-hospitality-services',
          title: 'Rukn Al Dyafa - Service',
          description:
            'Indulge in exclusive luxury catering services in the UAE. From signature drinks to gourmet treats, we create memorable dining experiences.',
          images: [
            {
              url: 'https://i.pinimg.com/736x/22/f8/4f/22f84fbacc70ee68a07f0efa9b9dca40.jpg',
              width: 800,
              height: 600,
              alt: 'Luxury Services - Rukn Al Dyafa',
            },
          ],
          site_name: 'Rukn Al Dyafa',
        }}
        twitter={{
          cardType: 'summary_large_image',
          title: 'Rukn Al Dyafa - Service',
          description:
            'Indulge in exclusive luxury catering services in the UAE. From signature drinks to gourmet treats, we create memorable dining experiences.',
          image: 'https://i.pinimg.com/736x/22/f8/4f/22f84fbacc70ee68a07f0efa9b9dca40.jpg',
        }}
        additionalMetaTags={[
          {
            name: 'author',
            content: 'Rukn Al Dyafa Team',
          },
        ]}
        openGraphType="website"
      /> */}

      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <div className="relative bg-black h-[30rem] px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/22/f8/4f/22f84fbacc70ee68a07f0efa9b9dca40.jpg"
            alt="Catering Background"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
          {/* Animated Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold leading-tight">
            {translations[language].heading}
          </h1>

          {/* Animated Paragraph */}
          <p className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl">
            {translations[language].paragraph}
          </p>
        </div>
      </div>

      {/* Suspense wrapper to load lazy components */}
      <Suspense fallback={<div>Loading...</div>}>
        <OrderForm language={language} />
      </Suspense>
         
    <Footer language={language} />
    </div>
  );
};

export default LuxuryServices;