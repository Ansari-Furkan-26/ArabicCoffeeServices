// ../components/About.js
import { motion } from "framer-motion";

const Packages = [
  {
    name: { english: "Package 1", arabic: "الباقة 1" },
    title: { english: "(10-30 Guests)", arabic: "(10-30 ضيف)" },
    description: { english: "Service providers: 2", arabic: "مزودو الخدمة: 2" },
    price: { english: "From 1600 AED", arabic: "من 1600 درهم" },
    img: "https://i.pinimg.com/736x/1e/f7/38/1ef7380b6fe1eb82d1653966a51bd72b.jpg"
  },
  {
    name: { english: "Package 2", arabic: "الباقة 2" },
    title: { english: "(30-60 Guests)", arabic: "(30-60 ضيف)" },
    description: { english: "Service providers: 3", arabic: "مزودو الخدمة: 3" },
    price: { english: "From 2100 AED", arabic: "من 2100 درهم" },
    img: "https://i.pinimg.com/736x/83/cb/9d/83cb9d2dbc3c702991d8bdc6da100df2.jpg"
  },
  {
    name: { english: "Package 3", arabic: "الباقة 3" },
    title: { english: "(60-80 Guests)", arabic: "(60-80 ضيف)" },
    description: { english: "Service providers: 3", arabic: "مزودو الخدمة: 3" },
    price: { english: "From 2600 AED", arabic: "من 2600 درهم" },
    img: "https://i.pinimg.com/736x/c1/88/fd/c188fd02f4ddce1079485372781cd48f.jpg"
  },
  {
    name: { english: "Package 4", arabic: "الباقة 4" },
    title: { english: "(80-100 Guests)", arabic: "(80-100 ضيف)" },
    description: { english: "Service providers: 5", arabic: "مزودو الخدمة: 5" },
    price: { english: "From 3100 AED", arabic: "من 3100 درهم" },
    img: "https://i.pinimg.com/736x/af/80/b5/af80b5f4b118152ac72aebac35db1b4c.jpg"
  },
  {
    name: { english: "Package 5", arabic: "الباقة 5" },
    title: { english: "(100-130 Guests)", arabic: "(100-130 ضيف)" },
    description: { english: "Service providers: 6", arabic: "مزودو الخدمة: 6" },
    price: { english: "From 3600 AED", arabic: "من 3600 درهم" },
    img: "https://i.pinimg.com/736x/04/8c/af/048caf1fb579128cc2730ecd7a536637.jpg"
  },
  {
    name: { english: "Package 6", arabic: "الباقة 6" },
    title: { english: "(130-150 Guests)", arabic: "(130-150 ضيف)" },
    description: { english: "Service providers: 7", arabic: "مزودو الخدمة: 7" },
    price: { english: "From 4100 AED", arabic: "من 4100 درهم" },
    img: "https://i.pinimg.com/736x/ec/0e/0b/ec0e0b2ee0b2a51699ebf6f5e4893d4d.jpg"
  },
];

const About = ({ language = "english" }) => {
    return (
      <div className="h-full pt-8 bg-gray-100" id="Product">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        {language === "english" ? "Our Exclusive Packages" : "باقاتنا الحصرية"}
      </h1>

      {/* Grid Cards */}
      <div className="relative overflow-hidden px-3">
        <div className="flex space-x-6 py-5 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory">
          {Packages.map((product, index) => (
            <a href={`arabic-coffee-services#package-${index}`} key={index}>
              <motion.div
                className="min-w-[300px] h-full rounded-xl bg-white shadow-lg overflow-hidden snap-start relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Background Image */}
                <img
                  src={product.img}
                  alt={product.name[language]}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
                  {product.name[language]}
                </div>
                {/* Content */}
                <div className="inset-x-0 bottom-0 p-4 bg-white bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-500">
                  <h3 className="text-lg font-semibold mb-1">{product.title[language]}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description[language]}</p>
                  <p className="text-green-600 font-bold text-lg">{product.price[language]}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
    );
  };
  
  export default About;