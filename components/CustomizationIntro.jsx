import React from "react";

// Define content for both languages
const content = {
  english: {
    heading: "Customize Your Perfect Package!",
    description:
      "Want a special coffee experience with personalized options and dedicated service providers? You're just a click away from crafting your dream package tailored to your taste.",
    imageAlt: "Coffee Package", 
    Note: "Create Your Special Package",
    button: "Click Here",
  },
  arabic: {
    heading: "قم بتخصيص الحزمة المثالية لك!",
    description:
    "هل تريد تجربة قهوة مميزة مع خيارات مخصصة ومقدمي خدمات متخصصين؟ أنت على بعد نقرة واحدة فقط من تصميم باقة أحلامك المصممة خصيصًا لتلائم ذوقك.",
    imageAlt: "باقة القهوة",
    Note: "أنشئ باقتك الخاصة",
    button: "أنشئ باقتك الخاصة",
  },
};

const CustomizationIntro = ({ language = "english" }) => {
  const handlePackageClick = () => {
    // Navigate to the specific section of the desired page
    window.location.href = "/arabic-coffee-services#custom-package";
  };

  const currentContent = content[language];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Heading */}
      <div className="text-black max-w-md text-center">
        <h1 className="text-4xl font-bold md:mb-4 text-center">
          {currentContent.heading}
        </h1>
      </div>

      {/* Package */}
      <div
        onClick={handlePackageClick}
        className="mt-6 md:mt-0 md:w-1/2 p-5 rounded-xl bg-white flex flex-col items-center text-center relative cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        <img
          src="https://i.pinimg.com/736x/14/b1/50/14b150f878c0fc72a6ef4cbfbf281c6c.jpg"
          alt={currentContent.imageAlt}
          className="w-full max-h-[300px] object-cover rounded-lg shadow-lg"/>
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div> {/* Overlay */}
        <p className="my-4 text-gray-600 max-w-lg relative z-10">
          {currentContent.description}
        </p>
        <h1 className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all">{currentContent.Note}</h1>
        <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-lg font-semibold">
          {currentContent.button}
        </div>
      </div>
    </div>
  );
};

export default CustomizationIntro;
