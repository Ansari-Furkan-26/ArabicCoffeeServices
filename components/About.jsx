import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define content for both languages
const cardsContent = {
  english: [
    {
      img: "/6.jpg",
      title: "Arabic Coffee Service Experience",
      message:
        "Rukn Al Dyafa serves the finest traditional and international beverages with exceptional service, enhancing the visitor experience at every moment.",
    },
    {
      img: "/4.jpg",
      title: "Luxury Wedding Events",
      message:
        "Unique designs and exceptional service create unforgettable weddings, offering elegance and a touch of perfection for the special occasion.",
    },
    {
      img: "/33.jpg",
      title: "Business Conferences",
      message:
        "Rukn Al Dyafa provides professional hospitality services tailored to meetings and conferences, ensuring guest comfort and event success.",
    },
  ],
  arabic: [
    {
      img: "/6.jpg",
      title: "تجربة تقديم المشروبات للضيوف",
      message:
        "ركن الضيافة يقدم أفخر المشروبات التقليدية والدولية مع خدمة استثنائية، مما يعزز تجربة الزوار في كل لحظة.",
    },
    {
      img: "/4.jpg",
      title: "فعاليات زفاف فاخرة",
      message:
        "تصاميم فريدة وخدمة استثنائية تخلق حفلات زفاف لا تُنسى، وتضفي لمسة من الأناقة والكمال على المناسبة الخاصة.",
    },
    {
      img: "/33.jpg",
      title: "مؤتمرات الأعمال",
      message:
        "ركن الضيافة يوفر خدمات ضيافة مهنية مصممة خصيصًا للاجتماعات والمؤتمرات، مما يضمن راحة الضيوف ونجاح الفعالية.",
    },
  ],
};

const aboutContent = {
  english: {
    heading: "Delivering Timeless Elegance and Mixology Excellence to Your Events.",
    description:
      "Crafting unforgettable catering experiences in the UAE, where exceptional Arabic coffee services, refined hospitality, and premium beverage offerings bring elegance and balance to every occasion.",
    button: "Book Your Event",
    cateringHeading: "Luxury Coffee Service Across All Emirates",
    cateringDescription:
      "We specialize in providing luxury Arabic coffee services across all Emirates, ensuring an exceptional experience for your guests. Our expert baristas craft premium beverages with precision and flair, adding a touch of sophistication and elegance to any event. Whether it’s a corporate gathering, wedding, or private celebration, our Arabic coffee service is tailored to meet your unique needs. From elegant presentation to seamless execution, we focus on every detail to leave a lasting impression. Let us elevate your event with unparalleled quality and professionalism.",
  },
  arabic: {
    heading: "نقدم أناقة خالدة وتميز في فن المزج لمناسباتكم.",
    description:
      "ابتكار تجارب تقديم طعام لا تُنسى في الإمارات العربية المتحدة، حيث توفر خدمات القهوة العربية الاستثنائية والضيافة الراقية وعروض المشروبات الفاخرة الأناقة والتوازن لكل مناسبة",
    button: "احجز مناسبتك",
    cateringHeading: "خدمة قهوة فاخرة في جميع الإمارات",
    cateringDescription:
      "نحن متخصصون في تقديم خدمات القهوة الفاخرة في جميع أنحاء الإمارات، مما يضمن تجربة استثنائية لضيوفكم. يقوم خبراؤنا بتحضير مشروبات مميزة بعناية، مضيفين لمسة من الأناقة لأي مناسبة. سواء كانت تجمعًا للشركات، أو حفلة زفاف، أو احتفالاً خاصًا، فإن خدمتنا مصممة لتلبية احتياجاتكم. من التقديم الأنيق إلى التنفيذ السلس، نركز على كل التفاصيل لنترك انطباعًا دائمًا. دعونا نرفع من مستوى مناسبتكم بالجودة والاحترافية التي لا تُضاهى.",
  },
};

function About({ language }) {
  const content = aboutContent[language];
  const cards = cardsContent[language];

  return (
    <div className="h-full px-4 py-8 sm:px-8 bg-gray-100">
      {/* About Section */}
      <div className="p-6 flex flex-col lg:flex-row justify-between gap-8">
        <motion.h2
          className="text-3xl font-bold mb-4 max-w-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          {content.heading}
        </motion.h2>
        <motion.div
          className="block max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <p className="text-gray-600 mb-6">{content.description}</p>
          <Link href="/arabic-coffee-services">
            <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-full mb-6 transition-all">
              {content.button}
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-4 relative h-96 text-white group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}>
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-2xl transition-opacity duration-500 group-hover:opacity-80"></div>
              {/* Text Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-4 rounded-2xl">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-100 line-clamp-2">{card.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Catering Service Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-16 mt-12">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <img
            src={"/About.jpg"}
            alt="Catering Service"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold mb-4">{content.cateringHeading}</h2>
          <p className="text-gray-700">{content.cateringDescription}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;