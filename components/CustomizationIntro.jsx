import React, { useEffect, useState } from "react";

// Define content for both languages
const content = {
  english: {
    heading: "Customize Your Perfect Coffee Package!",
    description:
      "Want a special coffee experience with personalized options like hot and cold drinks, food items, and dedicated servers? You're just a click away from crafting your dream coffee package tailored to your taste.",
    button: "Create Your Special Package",
    imageAlt: "Coffee Package",
  },
  arabic: {
    heading: "قم بتخصيص باقة القهوة المثالية لك!",
    description:
      "هل تريد تجربة قهوة مميزة مع خيارات مخصصة مثل المشروبات الساخنة والباردة والأطعمة والخوادم المخصصة؟ أنت على بعد نقرة واحدة فقط من تصميم باقة القهوة التي تحلم بها والتي تناسب ذوقك.",
    button: "أنشئ باقتك الخاصة",
    imageAlt: "باقة القهوة",
  },
};

const CustomizationIntro = ({ language = "english" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that this is rendered on the client side
  }, []);

  const handleButtonClick = () => {
    // Navigate to the specific section of the desired page
    window.location.href = "/arabic-coffee-services#custom-package";
  };

  if (!isClient) return null; // Avoid rendering before client-side mount

  const currentContent = content[language];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Left Section - Text */}
      <div className="text-black max-w-md text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">{currentContent.heading}</h1>
        <p className="mb-6 text-gray-600 max-w-2xl mx-auto">{currentContent.description}</p>
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 bg-black text-gray-50 rounded-lg shadow-lg transition-all"
        >
          {currentContent.button}
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="mt-6 md:mt-0 md:w-1/2">
        <img
          src="https://i.pinimg.com/736x/14/b1/50/14b150f878c0fc72a6ef4cbfbf281c6c.jpg" // Replace with the URL of your image
          alt={currentContent.imageAlt}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CustomizationIntro;