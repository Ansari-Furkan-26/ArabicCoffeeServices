'use client'
import React, { useState, useEffect } from "react";

const importedImages = [
  { src: "/1.jpg", alt: "Image 1" },
  { src: "/2.jpg", alt: "Image 2" },
  { src: "/3.jpg", alt: "Image 3" },
  { src: "/4.jpg", alt: "Image 4" },
  { src: "/5.jpg", alt: "Image 5" },
  { src: "/6.jpg", alt: "Image 6" },
  { src: "/7.jpg", alt: "Image 7" },
  { src: "/8.jpg", alt: "Image 8" },
  { src: "/9.jpg", alt: "Image 9" },
  { src: "/10.jpg", alt: "Image 10" },
  { src: "/11.jpg", alt: "Image 11" },
  { src: "/12.jpg", alt: "Image 12" },
  { src: "/13.jpg", alt: "Image 13" },
  { src: "/14.jpg", alt: "Image 14" },
  { src: "/15.jpg", alt: "Image 15" },
  { src: "/16.jpg", alt: "Image 16" },
  { src: "/17.jpg", alt: "Image 17" },
  { src: "/18.jpg", alt: "Image 18" },
  { src: "/19.jpg", alt: "Image 19" },
  { src: "/20.jpg", alt: "Image 20" },
  { src: "/21.jpg", alt: "Image 21" },
  { src: "/22.jpg", alt: "Image 22" },
  { src: "/23.jpg", alt: "Image 23" },
  { src: "/24.jpg", alt: "Image 24" },
  { src: "/25.jpg", alt: "Image 25" },
  { src: "/26.jpg", alt: "Image 26" },
  { src: "/27.jpg", alt: "Image 27" },
  { src: "/28.jpg", alt: "Image 28" },
  { src: "/29.jpg", alt: "Image 29" },
  { src: "/30.jpg", alt: "Image 30" },
  { src: "/31.jpg", alt: "Image 31" },
  { src: "/32.jpg", alt: "Image 32" },
  { src: "/33.jpg", alt: "Image 33" },
  { src: "/34.jpg", alt: "Image 34" },
  { src: "/35.jpg", alt: "Image 35" },
  { src: "/36.jpg", alt: "Image 36" },
  { src: "/37.jpg", alt: "Image 37" },
  { src: "/38.jpg", alt: "Image 38" },
  { src: "/39.jpg", alt: "Image 39" },
  { src: "/40.jpg", alt: "Image 40" },
  { src: "/41.jpg", alt: "Image 41" },
  { src: "/42.jpg", alt: "Image 42" },
  { src: "/43.jpg", alt: "Image 43" },
  { src: "/44.jpg", alt: "Image 44" },
  { src: "/45.jpg", alt: "Image 45" },
  { src: "/46.jpg", alt: "Image 46" },
  { src: "/47.jpg", alt: "Image 47" },
  { src: "/48.jpg", alt: "Image 48" },
  { src: "/49.jpg", alt: "Image 49" },
  { src: "/50.jpg", alt: "Image 50" },
  { src: "/51.jpg", alt: "Image 51" },
];


const ImageGallery = ({ language = "english" }) => {
    const translations = {
      english: {
        heading: "Gallery",
      },
      arabic: {
        heading: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631",
      },
    };

  return (
    <div className="pb-10 bg-gray-100 ">
    <h2 className="text-3xl font-bold text-center mb-6">
      {translations[language].heading}
    </h2>
    <div className="relative overflow-hidden px-3 ">
    <div className="overflow-x-scroll relative p-4 mx-auto flex gap-4 scrollbar-hide"
      id="image-gallery-container"
      style={{ whiteSpace: "nowrap" }}
    >
      {importedImages.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className="max-w-sm w-80 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
      />
    ))}
    </div>
    </div>
    
  </div>
  );
};

export default ImageGallery;
  