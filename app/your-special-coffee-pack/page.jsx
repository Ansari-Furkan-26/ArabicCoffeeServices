'use client'
import React, { useState } from "react";
import PackShowcase2 from "@/components/Package";
import Cart from "@/components/Cart";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomizePackage from "@/components/CustomizePackage";


const Checkout = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackagePrice, setSelectedPackagePrice] = useState(null);

  const handlePackageSelection = (title, price) => {
    setSelectedPackage(title);
    setSelectedPackagePrice(price);
  };

  const scrollToCart = () => {
    document.getElementById("cart")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            src="https://i.pinimg.com/736x/0f/d7/0f/0fd70f3e12dbdf6519235fb2493297fa.jpg"
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
              ? "Experience Unmatched Tradition"
              : "تجربة تقاليد لا مثيل لها"}
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-lg md:text-xl italic max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {language === "english"
              ? "At Rukn Al Dyafa, we redefine hospitality with the rich flavors of Arabic coffee and luxurious catering that speak to both heart and culture. "
              : "في ركن الضيافة، نعيد تعريف الضيافة بنكهات القهوة العربية الغنية وخدمات التموين الفاخرة التي تتحدث إلى القلب والثقافة."}
          </motion.p>
        </div>
      </div>
            
        
      <CustomizePackage language={language} />
      
    <Footer language={language} />
    </div>
  );
};

export default Checkout; 
