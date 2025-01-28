'use client';
import React, { useState, useEffect } from "react";
import PackShowcase2 from "@/components/Package";
import Cart from "@/components/Cart";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomePackage from "@/components/CustomePackage";

const Checkout = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(null);
  const [customPackage, setCustomPackage] = useState(null);
  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load language preference from localStorage when component mounts
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const savedPackage = localStorage.getItem('selectedPackage');
    const savedPackagePrice = localStorage.getItem('selectedPackagePrice');
    const savedCustomPackage = localStorage.getItem('customPackage');

    if (savedPackage && savedPackagePrice) {
      setSelectedPackage(savedPackage);
      setSelectedPackagePrice(parseFloat(savedPackagePrice));
    }

    if (savedCustomPackage) {
      setCustomPackage(JSON.parse(savedCustomPackage));
    }
  }, []);

  useEffect(() => {
    if (selectedPackage && selectedPackagePrice) {
      localStorage.setItem('selectedPackage', selectedPackage);
      localStorage.setItem('selectedPackagePrice', selectedPackagePrice.toString());
    }
  }, [selectedPackage, selectedPackagePrice]);

  useEffect(() => {
    if (customPackage) {
      localStorage.setItem('customPackage', JSON.stringify(customPackage));
    } else {
      localStorage.removeItem('customPackage');
    }
  }, [customPackage]);

  const handlePackageSelection = (title, price) => {
    setSelectedPackage(title);
    setSelectedPackagePrice(price);
  };

  const handleAddCustomPackage = (customPackageData) => {
    setCustomPackage(customPackageData);
  };

  const scrollToCart = () => {
    document.getElementById("cart")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  return (
    <div className="bg-gray-100">
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
            src="https://i.pinimg.com/736x/74/fa/f7/74faf76a2616f4f776cf157c18a09d77.jpg"
            alt={language === "english" ? "Hero" : "الصورة الرئيسية"}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        {/* Content */}
        <div className="relative text-left md:text-center text-white flex flex-col items-start md:items-center justify-center h-full">
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {language === "english"
              ? "Experience Our Services"
              : "تجربة خدماتنا"}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === "english"
              ? "At Rukn Al Dyafa, we deliver the elegance of traditional hospitality through luxurious catering."
              : "في ركن الضيافة، نقدم أناقة الضيافة التقليدية من خلال تقديم خدمات الضيافة الفاخرة."}
          </motion.p>
        </div>
      </div>

      {/* Package Showcase */}
      <PackShowcase2 onSelectPackage={handlePackageSelection} language={language} />

      {/* Custom Package Section */}
      <div id="custom-package" className="px-5">
        <CustomePackage
          language={language}
          onAddToCart={handleAddCustomPackage}
        />
      </div>
     
      {/* Cart Section */}
      <Cart
        selectedPackage={selectedPackage}
        selectedPackagePrice={selectedPackagePrice}
        customPackage={customPackage}
        language={language}
      />

      {/* Floating Button */}
      {(selectedPackage || customPackage) && (
        <button
          onClick={scrollToCart}
          className="fixed bottom-4 right-4 bg-gray-900 text-white text-xl p-4 rounded-full h-16 w-16 flex items-center justify-center 
          shadow-lg hover:bg-gray-800 focus:outline-none 
          focus:ring-2 focus:ring-slate-100 focus:ring-opacity-50"
          aria-label="Go to Cart"
        >
          🛒
        </button>
      )}

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default Checkout;