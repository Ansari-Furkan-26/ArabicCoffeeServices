'use client';
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdLanguage } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from "next/link";

const Navbar = ({
  
  mobileMenuOpen,
  setMobileMenuOpen,
  language = "english",
  toggleLanguage,
}) => {
  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setContactDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const translations = {
    english: {
      banner: "Rukn Al Dyafa Hospitality Services",
    },
    arabic: {
      banner: "ركن الضيافة للخدمات الفندقية",
    },
  };

  const navigation = {
    english: [
      { name: "About", href: "/about-rukn-al-dyafa" },
      { name: "Luxury Service", href: "/luxury-hospitality-services" },
      { name: "Event", href: "/event-planning-services" },
      { name: "Captured Moment", href: "/hospitality-services-memories" },
    ],
    arabic: [
      { name: "حول", href: "/about-rukn-al-dyafa" },
      { name: "الخدمات الفاخرة", href: "/luxury-hospitality-services" },
      { name: "الحدث", href: "/event-planning-services" },
      { name: "اللحظات الملتقطة", href: "/hospitality-services-memories" },
    ],
  };

  const t = translations[language] || translations.english;
  const logoPath = language === "english" ? "/logo/english_logo.png" : "/logo/arabic_logo.png";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Mobile Banner */}
      <div className="block lg:hidden text-center pt-3">
        <h1 className="text-white text-sm font-semibold drop-shadow-lg">{t.banner}</h1>
      </div>

      <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src={logoPath}
              alt={language === "english" ? "English Logo" : "Arabic Logo"}
              width={120}
              height={50}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white text-lg px-2 py-1 rounded-md"
            aria-label="Toggle Language"
          >
            <MdLanguage className="text-2xl" />
            {language === "english" ? "Eng" : "Ara"}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 p-2.5 text-white"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation[language].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-white hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Dropdown and Language Toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white text-sm font-semibold px-3 py-1 rounded-md"
          >
            <MdLanguage />
            {language === "english" ? "English" : "العربية"}
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setContactDropdownOpen(!isContactDropdownOpen)}
              className="text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center"
            >
              {language === "english" ? "Contact Us" : "اتصل بنا"}
              <TiArrowSortedDown
                className={`ml-2 transform transition-transform ${
                  isContactDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isContactDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                <a
                  href="https://wa.me/+917045992776"
                  className="block px-4 py-2 text-white text-sm hover:bg-gray-700 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +917045992776
                </a>
                <a
                  href="https://wa.me/+917045992776"
                  className="block px-4 py-2 text-white text-sm hover:bg-gray-700 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +917045992776
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brown-900 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-mx-6 flex items-center">
              <Image src={logoPath} alt="Rukn Al Dyafa Logo" width={100} height={50} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 text-white"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-2 py-6">
              {navigation[language].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <a
                href="https://wa.me/+917045992776"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                +917045992776
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
