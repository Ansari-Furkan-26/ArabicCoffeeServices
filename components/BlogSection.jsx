// ../components/About.js
'use client'
import React, { useState, useEffect } from "react"; 

const About = ({ language }) => {

  const [showPopup, setShowPopup] = useState(false);

  const translations = {
    english: {
      title: "Hospitality Insights and Inspiration",
      description:
        "Explore the world of gourmet catering, from tantalizing seasonal menus to the artistry of event presentation.",
      buttonText: "Explore All Blogs",
      blogTitle: "Luqaimat Delight",
      blogMessage: "Experience the authentic taste of traditional Luqaimat, freshly prepared with a touch of sweetness and served with premium hospitality.",
      teaTimeTitle: "Tea Time Perfection",
      teaTimeMessage: "Savor the perfect cup of tea, expertly brewed and served to provide a comforting and delightful experience for every guest.",
      sweetTreatsTitle: "Sweet Treats Galore",
      sweetTreatsMessage: "Indulge in a selection of exquisite sweets, crafted with care to bring joy and flavor to every moment of your event.",
      readTime: "5 min read", // English text for read time
    },
    arabic: {
      title: "رؤى وإلهام في مجال الضيافة",
      description:
        "استكشف عالم الضيافة الفاخرة، من قوائم الطعام الموسمية المدهشة إلى فن تقديم الفعاليات.",
      buttonText: "استكشاف جميع المدونات",
      blogTitle: "بهجة اللقيمات",
      blogMessage: "اختبر الطعم الأصيل لللقيمات التقليدية، المحضرة طازجة مع لمسة من الحلاوة وتقدم مع ضيافة متميزة.",
      teaTimeTitle: "كامل الاستمتاع بالشاي",
      teaTimeMessage: "استمتع بكوب الشاي المثالي، المحضر بحرفية ليمنح تجربة مريحة ولذيذة لجميع ضيوفك.",
      sweetTreatsTitle: "حلويات رائعة",
      sweetTreatsMessage: "دلل نفسك باختيار من الحلويات الرائعة، المحضرة بعناية لإضفاء الفرح والنكهة على كل لحظة في مناسبتك.",
      readTime: "5 دقائق قراءة", // Arabic translation for read time
    },
  };

  const t = translations[language] || translations.english;

  useEffect(() => {
    document.documentElement.lang = language === 'arabic' ? 'ar' : 'en';
  }, [language]);

  const blogs = [
    {
      image: "/8.jpg",
      title: t.blogTitle,
      message: t.blogMessage,
      readTime: t.readTime, // Using dynamic read time translation
    },
    {
      image: "/9.jpg",
      title: t.teaTimeTitle,
      message: t.teaTimeMessage,
      readTime: t.readTime, // Using dynamic read time translation
    },
    {
      image: "/16.jpg",
      title: t.sweetTreatsTitle,
      message: t.sweetTreatsMessage,
      readTime: t.readTime, // Using dynamic read time translation
    },
  ];


    return (
      <div className="bg-gray-100 py-8 px-4" id="Gallery">
      <div className="max-w-6xl mx-auto">
        {/* Title and description */}
        <div className="text-center mb-12" dir={language === 'arabic' ? 'rtl' : 'ltr'}>
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
          <a href="best-arabic-coffee-service">
            <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              {t.buttonText}
            </button>
          </a>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <a href="/best-arabic-coffee-service" key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-900 opacity-60 text-gray-100 backdrop-blur-xl px-3 py-1 text-sm font-semibold rounded-full">
                  {blog.readTime}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{blog.message}</p>
                  <div className="flex justify-end mt-4">
                    <button className="text-black group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
    );
  };
  
  export default About;
  