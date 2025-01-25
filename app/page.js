'use client';

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import About from "@/components/About";
import Plans from "@/components/Plans";
import BlogSection from "@/components/BlogSection";
import VideoBackground from "@/components/VideoBackground";
import Form from "@/components/ContactForm";
import FeaturedArtworks from "@/components/HeroGallery";
import Home from "@/components/Home";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import dynamic from "next/dynamic";
import Floating from "@/components/Floating";
import Head from 'next/head';
import CustomizationIntro from "@/components/CustomizationIntro";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamically import NextSeo
const NextSeo = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), {
  ssr: false,
});

export default function HomePage() {
  const [language, setLanguage] = useState("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  // Dynamic SEO data
  const seoData = {
    english: {
      title: "Rukn Al Dyafa | Hospitality Service",
      description:
        "Discover premium catering, hospitality and beverage services in the UAE. We specialize in luxurious drinks and unforgettable experiences for weddings, corporate events, and private gatherings.",
      url: "https://www.ruknaldyafa.ae/",
      openGraph: {
        title: "Rukn Al Dyafa - Premium Catering Services",
        description:
          "Discover luxury catering and beverage services for weddings, corporate events, and private gatherings in the UAE.",
        url: "https://www.ruknaldyafa.ae/",
        type: "website",
        images: [
          {
            url: "https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg",
            width: 800,
            height: 600,
            alt: "Rukn Al Dyafa Premium Catering",
          },
        ],
      },
    },
    arabic: {
      title: "ركن الضيافة | خدمة الضيافة",
      description:
        "اكتشف خدمات تقديم الطعام الفاخرة والضيافة والمشروبات في الإمارات. نحن متخصصون في تقديم المشروبات الفاخرة والتجارب التي لا تُنسى لحفلات الزفاف، الفعاليات الخاصة، وحفلات الشركات.",
      url: "https://www.ruknaldyafa.ae/ar/",
      openGraph: {
        title: "ركن الضيافة - خدمات تقديم الطعام الفاخرة",
        description:
          "اكتشف خدمات تقديم الطعام والمشروبات الفاخرة لحفلات الزفاف، الفعاليات الخاصة، وحفلات الشركات في الإمارات.",
        url: "https://www.ruknaldyafa.ae/ar/",
        type: "website",
        images: [
          {
            url: "https://i.pinimg.com/736x/a5/dd/21/a5dd2105486983221aac5199b30a29ac.jpg",
            width: 800,
            height: 600,
            alt: "ركن الضيافة خدمات الضيافة",
          },
        ],
      },
    },
  };

  const currentSeoData = seoData[language];

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
     <Head>
        {/* Add your meta viewport tag here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Dynamic SEO Metadata */}
      <NextSeo
        title={currentSeoData.title}
        description={currentSeoData.description}
        canonical={currentSeoData.url}
        openGraph={currentSeoData.openGraph}
        twitter={{
          cardType: "summary_large_image",
          title: currentSeoData.openGraph.title,
          description: currentSeoData.openGraph.description,
          image: currentSeoData.openGraph.images[0].url,
        }}
      />

      {/* Navbar */}
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Page Components */}
      <Home language={language} />
      <About language={language} />
      <VideoBackground language={language} />
      <Plans language={language} />
      <CustomizationIntro language={language} />
      <BlogSection language={language} />
      <FeaturedArtworks language={language} />
      <ReviewSection language={language}/>
      <Form language={language} />
      <Footer language={language} />
      <Floating />
    </div>
  );
}
