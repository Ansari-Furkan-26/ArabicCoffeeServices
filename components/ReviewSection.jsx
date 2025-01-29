//Latest One 
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc"; // Import Google Icon

// Function to format time (e.g., "a week ago", "3 months ago")
const formatTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (days < 7) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (days >= 7 && days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (days >= 30 && days < 365) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days >= 365) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return rtf.format(-seconds, 'second');
  }
};

// Define reviews content for both languages
const reviewsContent = {
  english: [
    {
      name: "Sabrein Al Najjar",
      time: "2025-01-05T10:00:00", // Example ISO Date
      rating: 5,
      text: "Amazing service, everything is arranged, creative people, and their faces are always smiling. Thank you very much for the service 🫰🏻",
      profileImage: "https://lh3.googleusercontent.com/a/ACg8ocJ4w29IgtizfuqCScQVQZNWabKd9CZfWWde9cIFZWLl5jIM6g=w45-h45-p-rp-mo-br100",
    },
    {
      name: "Abeer Abbas",
      time: "2024-12-29T17:00:00", // Example ISO Date
      rating: 5,
      text: "An upscale service that we rely on for special occasions, and the prices are very reasonable compared to other distinguished services.",
      profileImage: "https://lh3.googleusercontent.com/a/ACg8ocJD_X6dFCTgzDD1wj0HZZSLyF_bGEk3uz1pzfdht9XRGOTs1Q=w45-h45-p-rp-mo-ba2-br100",
    },
    {
      name: "einas ahmead alhaj",
      time: "2024-12-29T17:00:00", // Example ISO Date
      rating: 5,
      text: "The hospitality was great, the staff were amazing, their clothes were nice and fast, and the bites were amazing...",
      profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjWwaxRmm5SZKpmNrCmp1b__PpKK8GIfz_GjqJuMoeaI0aJS4e-c=w45-h45-p-rp-mo-br100"
    },
    {
      name: "Sharifa Hayat",
      time: "2024-12-29T17:00:00", // Example ISO Date
      rating: 5,
      text: "Thank you, Umm Abdul Rahman. Very elegant and beautiful service. Classy, ​​clean girls. They deserve all the best. Thank you. Our faces became white for the occasion.",
      profileImage: "https://lh3.googleusercontent.com/a/ACg8ocLPncQg9EgLspU62BTbm_HbCynh65Fx2nD2Q3G1CU3MbeJBjQ=w45-h45-p-rp-mo-br100"
    },
  ],
  arabic: [
    {
      name: "Sabrein Al Najjar",
      time: "2025-01-05T10:00:00", // Example ISO Date
      rating: 5,
      text: "خدمة بتجنن و كل شي مرتب و مبدعين و وجهم بشوش دايما شكرا كتير على الخدمة 🫰🏻",
      profileImage: "https://lh3.googleusercontent.com/a/ACg8ocJ4w29IgtizfuqCScQVQZNWabKd9CZfWWde9cIFZWLl5jIM6g=w45-h45-p-rp-mo-br100",
    },
    {
      name: "Abeer Abbas",
      time: "2024-12-29T17:00:00", // Example ISO Date
      rating: 5,
      text: "خدمة راقيه ونعتمدها بالمناسبات والاسعار جدا مناسبة مقارنه بالخدمات المميزة",
      profileImage: "https://lh3.googleusercontent.com/a/ACg8ocJD_X6dFCTgzDD1wj0HZZSLyF_bGEk3uz1pzfdht9XRGOTs1Q=w45-h45-p-rp-mo-ba2-br100",
    },
    {
      name: "einas ahmead alhaj",
      time: "2024-12-29T17:00:00", // Example ISO Date
      rating: 5,
      text: "وايد الضيافه كانت حلوة و الاستاف رهيبين ولبسهن حلو و سريعين و اللقيمات تجنن ...",
      profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjWwaxRmm5SZKpmNrCmp1b__PpKK8GIfz_GjqJuMoeaI0aJS4e-c=w45-h45-p-rp-mo-br100"
    },
    {
      name: "Sharifa Hayat",
      time: "2024-12-29T17:00:00", // Example ISO Date
      rating: 5,
      text: "شكرا أم عبد الرحمن خدمة جدا راقية وجميلة بنات راقيات نظافة يستاهلون كل خير شكرا بيضت وجوهنا في المناسبة",
      profileImage: "https://lh3.googleusercontent.com/a/ACg8ocLPncQg9EgLspU62BTbm_HbCynh65Fx2nD2Q3G1CU3MbeJBjQ=w45-h45-p-rp-mo-br100"
    },
  ],
};

const ReviewSection = ({ language }) => {
  const reviews = reviewsContent[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#F3F4F6] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-10">
          {language === "english"
            ? "Client Stories of Delicious Moments"
            : "قصص العملاء من اللحظات الشهية"}
        </h2>

        {/* Responsive Review Section */}
        <div className="relative">
          {/* Desktop View: Grid Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-20">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          {/* Mobile View: Single Review with Navigation
          <div className="lg:hidden">
            <ReviewCard review={reviews[currentIndex]} />
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400"
              >
                &larr; Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400"
              >
                Next &rarr;
              </button>
            </div>
          </div> */}
        {/* Mobile View: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto flex space-x-4 pb-4" style={{ scrollbarWidth: "thin" }}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        </div>
      </div>

      {/* Footer Section */}
    
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(formatTime(review.time));

  // Use useEffect to update the time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(formatTime(review.time)); // Recalculate the time
    }, 60000); // Update every 1 minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [review.time]);

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300 lg:w-[300px]">
      <div className="flex items-center mb-3">
        {/* Star Rating */}
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.54L.244 6.91l6.562-.954L10 0l2.194 5.956 6.562.954-4.854 4.64 1.122 6.54L10 15z" />
          </svg>
        ))}
        {/* Google G Color Logo */}
        <FcGoogle className="w-6 h-6 ml-40 lg:ml-24" />
      </div>

      <p className="text-sm text-gray-700 mb-4">
        {isExpanded ? review.text : `${review.text.substring(0, 98)}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-medium hover:underline ml-2"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </p>

      <div className="flex items-center">
        {/* Wrap the avatar and name with a link to the Google Maps profile */}
        <a
          href="https://www.google.com/maps/place/Rukn+Al+Dyafa+%7C+Hospitality+Service/@24.3540069,53.9485752,8z/data=!3m1!4b1!4m6!3m5!1s0x67845919ee33a677:0xb8920efbf13fde37!8m2!3d24.3540069!4d53.9485752!16s%2Fg%2F11wv28_bw7?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src={review.profileImage}
            alt={review.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{review.name}</p>
            <p className="text-xs text-gray-500">
              {elapsedTime} {/* Display dynamic time */}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;