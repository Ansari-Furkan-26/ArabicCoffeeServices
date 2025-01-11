// 'use client';
import React from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rukn Al Dyafa | Hospitality Services",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const [language, setLanguage] = useState("english");
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleLanguage = () => {
  //   setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  // };

  return (
    <html lang="en">
      <body>
        {/* <Navbar
          language={language}
          toggleLanguage={toggleLanguage}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}/> */}
        <main>{children}</main>
        {/* <Footer language={language} /> */}
      </body>
    </html>
  );
}
