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

  // Persist language toggle state
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== language) {
      toggleLanguage(); // Sync with saved language if needed
    }
  }, []);

  const handleToggleLanguage = () => {
    const newLanguage = language === "english" ? "arabic" : "english";
    localStorage.setItem("language", newLanguage); // Store in localStorage
    toggleLanguage(); // Parent handler
  };

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
      { name: "Luxury Service", href: "/arabic-coffee-services" },
      { name: "Event", href: "/best-arabic-coffee-service" },
      { name: "Captured Moment", href: "/hospitality-services-memories" },
    ],
    arabic: [
      { name: "حول", href: "/about-rukn-al-dyafa" },
      { name: "الخدمات الفاخرة", href: "/arabic-coffee-services" },
      { name: "الحدث", href: "/best-arabic-coffee-service" },
      { name: "اللحظات الملتقطة", href: "/hospitality-services-memories" },
    ],
  };

  const t = translations[language] || translations.english;
  const logoPath = language === "english" ? "/logo.svg" : "/logo.svg";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Mobile Banner */}
      <div className="block lg:hidden text-center pt-3">
        <div className="absolute inset-0 h-12 bg-black opacity-40 transition-opacity"></div>
        <h1 className="text-white text-sm font-semibold drop-shadow-lg">{t.banner}</h1>
      </div>

      <nav aria-label="Global" className="flex items-center justify-between p-2 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src={logoPath}
              alt={language === "english" ? "English Logo" : "Arabic Logo"}
              width={120}
              height={40}
              className="object-contain h-16 mt-2 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={handleToggleLanguage}
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
            onClick={handleToggleLanguage}
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
                  href="https://wa.me/+971503665518"
                  className="block px-4 py-2 text-white text-sm hover:bg-gray-700 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971 50 366 5518
                </a>
                <a
                  href="https://wa.me/+971555428833"
                  className="block px-4 py-2 text-white text-sm hover:bg-gray-700 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971 55 542 8833
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm -mr-24">
          <div className="flex items-center justify-between">
            <Link href="/" className="-mx-6 flex items-center">
              <Image src={logoPath} alt="Rukn Al Dyafa Logo" width={100} height={50} className="ml-5 h-16 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 text-white right-6 fixed"
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
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <a
                href="https://wa.me/+971503665518"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-100 hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                +971 50 366 5518
              </a>
              <a
                href="https://wa.me/+971555428833"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-100 hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                +971 55 542 8833
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;