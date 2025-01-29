"use client";
import React, { useState, useEffect } from "react";

const translations = {
  english: {
    heading: "Make Your Own Package",
    HotType: "Select any Hot Drinks - AED 200 per drink",
    ColdType: "Select any Cold Drinks - AED 200 per drink",
    FoodItem: "Select any Traditional Food Items",
    Servant: "Service providers- AED 350 each",
    male: "Male",
    female: "Female",
    total: "Total Price",
    addToCart: "Add to Cart",
    errorNoItems: "Kindly select at least one item from the above options.",
    errorNoServant: "Kindly select at least one male or female servant.",
    hotDrinks: [
      "Arabic coffee",
      "Turkish coffee",
      "Black Tea with Zaffran",
      "Green Tea",
      "Lemon Grass Tea",
      "Moroccan Tea",
      "Pineapple Tea with Cinnamon",
      "Sahlab",
      "Apple Tea",
      "Cappuccino",
      "Habbat Al Hamra with Custard",
      "Hot Chocolate",
      "Rose with Custard",
      "Pistachio Latte",
      "Milk with Ginger",
      "Milk with Zaffran",
      "Milk with Zaatar",
    ],
    coldDrinks: [
      "Faloodah",
      "Mojito Passion Fruit",
      "Mojito Blueberry",
      "Pistachio latte",
      "Lemon with Lavender",
      "Pina Colada",
      "Faloodah Mango",
      "Coconut Water",
      "Apricot drink",
      "Iced Tea with Peach",
      "Lemon with Mint",
      "Hibiscus",
      "Zaffran Drink",
      "Orange Juice",
      "Faloodah Strawberry",
    ],
    foodItems: [
      "Emarati Balaleet - AED 400",
      "Dhango (Chick peas) - AED 400",
      "Luqaimat - AED 500",
      "Khubs shabab - AED 500",
      "Khabees - AED 500",
      "Mahallah Zayed - AED 600",
      "Khubs khameer - AED 800",
      "Khubs rigag - AED 1000",
    ],
  },
  arabic: {
    heading: "اصنع الحزمة الخاصة بك",
    HotType: "اختر أي مشروب ساخن - 200 درهم إماراتي لكل مشروب",
    ColdType: "اختر أي مشروب بارد - 200 درهم إماراتي لكل مشروب",
    FoodItem: "اختر المواد الغذائية التقليدية",
    Servant: "مقدمي الخدمة - 350 درهمًا إماراتيًا لكل منهم",
    male: "الخادم الذكر",
    female: "الخادمة الأنثى",
    total: "السعر الإجمالي",
    addToCart: "أضف إلى السلة",
    errorNoItems: "يرجى اختيار عنصر واحد على الأقل من الخيارات أعلاه.",
    errorNoServant: "يرجى اختيار خادم واحد على الأقل ذكر أو أنثى.",
    hotDrinks: [
      "القهوة العربية",
      "القهوة التركية",
      "شاي أسود مع زعفران",
      "شاي أخضر",
      "شاي عشب الليمون",
      "شاي مغربي",
      "شاي الأناناس بالقرفة",
      "سحلب",
      "شاي التفاح",
      "كابتشينو",
      "حبّة الحمرا بالكاسترد",
      "شوكولاتة ساخنة",
      "وردة مع كاسترد",
      "فستق لاتيه",
      "حليب بالزنجبيل",
      "حليب مع زعفران",
      "حليب بالزعتر",
    ],
    coldDrinks: [
      "فالوده",
      "موهيتو باشن فروت",
      "موهيتو بلوبيري",
      "لاتيه الفستق",
      "ليمون مع الخزامى",
      "بينا كولادا",
      "فالودة مانجو",
      "ماء جوز الهند",
      "مشروب المشمش",
      "شاي مثلج مع خوخ",
      "ليمون بالنعناع",
      "الكركديه",
      "مشروب زعفران",
      "عصير برتقال",
      "فالودة فراولة",
    ],
    foodItems: [
      "إماراتي بلاليت - 400 درهم",
      "دانجو (حمص) - 400 درهم ",
      "لقيمات - 500 درهم",
      "خبوس شباب - 500 درهم",
      "خبيس - 500 درهم",
      "محلہ ز اید - 600 درهم",
      "خبس خمير - 800 درهم",
      "خبس رغاغ - 1000 درهم",
    ],
  },
};

const foodItemPrices = {
  "Emarati Balaleet - AED 400": 400,
  "Dhango (Chick peas) - AED 400": 400,
  "Luqaimat - AED 500": 500,
  "Khubs shabab - AED 500": 500,
  "Khabees - AED 500": 500,
  "Mahallah Zayed - AED 600": 600,
  "Khubs khameer - AED 800": 800,
  "Khubs rigag - AED 1000": 1000,
  "إماراتي بلاليت - 400 درهم": 400,
  "دانجو (حمص) - 400 درهم ": 400,
  "لقيمات - 500 درهم": 500,
  "خبوس شباب - 500 درهم": 500,
  "خبيس - 500 درهم": 500,
  "محلہ ز اید - 600 درهم": 600,
  "خبس خمير - 800 درهم": 800,
  "خبس رغاغ - 1000 درهم": 1000,
};

const CustomePackage = ({ language, onAddToCart }) => {
  const [selectedHotDrinks, setSelectedHotDrinks] = useState([]);
  const [selectedColdDrinks, setSelectedColdDrinks] = useState([]);
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [maleServants, setMaleServants] = useState(0);
  const [femaleServants, setFemaleServants] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const hotDrinkPrice = selectedHotDrinks.length * 200;
    const coldDrinkPrice = selectedColdDrinks.length * 200;
    const foodPrice = selectedFoodItems.reduce(
      (total, item) => total + (foodItemPrices[item] || 0),
      0
    );
    const servantPrice = (maleServants + femaleServants) * 350;
    setTotalPrice(hotDrinkPrice + coldDrinkPrice + foodPrice + servantPrice);
  }, [selectedHotDrinks, selectedColdDrinks, selectedFoodItems, maleServants, femaleServants]);

  const handleSelection = (item, setSelectedItems, selectedItems) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const t = translations[language] || translations.english;

  const handleAddToCart = () => {
    if (
      selectedHotDrinks.length === 0 &&
      selectedColdDrinks.length === 0 &&
      selectedFoodItems.length === 0
    ) {
      setError(t.errorNoItems);
      return;
    }
    if (maleServants + femaleServants === 0) {
      setError(t.errorNoServant);
      return;
    }

    const foodPrice = selectedFoodItems.reduce(
      (total, item) => total + (foodItemPrices[item] || 0),
      0
    );

    const hotDrinkPrice = selectedHotDrinks.length * 200;
    const coldDrinkPrice = selectedColdDrinks.length * 200;
    const servantPrice = (maleServants + femaleServants) * 350;
    const totalPrice = hotDrinkPrice + coldDrinkPrice + foodPrice + servantPrice;

    setError("");

    const cartData = {
      hotDrinks: selectedHotDrinks,
      coldDrinks: selectedColdDrinks,
      foodItems: selectedFoodItems,
      foodPrice,
      maleServants,
      femaleServants,
      totalPrice,
    };

    console.log("Cart Data:", cartData);
    localStorage.setItem("customPackage", JSON.stringify(cartData));
    onAddToCart(cartData); // Pass custom package data to parent

      // Refresh the page
  window.location.reload();
  };

  return (
    <div className="mb-4">
      <h2 className="mb-4 text-2xl font-bold text-center">{t.heading}</h2>
      <div className="p-4 bg-white rounded-xl max-w-md md:max-w-full mx-auto shadow-lg w-full flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/736x/f9/78/b5/f978b5c922e83377ad4fc7300a9cd0b0.jpg"
            className="hidden md:block rounded-lg mb-4 w-full object-cover h-[845px]"
            alt=""
          />
          <img
            src="https://i.pinimg.com/736x/ef/37/44/ef374482f186de6cd9e65100aea27b16.jpg"
            className="md:hidden block rounded-lg mb-4 w-full object-cover h-full"
            alt=""
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 lg:pr-8 md:px-6">
          <div className="flex md:block flex-col lg:flex-row md:gap-8">
            {/* Hot Drinks */}
            <div className="mb-4 flex-1">
              <h3 className="mb-2 font-semibold">{t.HotType}</h3>
              <div className="flex flex-wrap gap-2">
                {t.hotDrinks.map((drink, index) => (
                  <button
                    key={index}
                    className={`text-sm px-4 py-2 truncate border rounded-lg ${
                      selectedHotDrinks.includes(drink)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() =>
                      handleSelection(drink, setSelectedHotDrinks, selectedHotDrinks)
                    }
                  >
                    {drink}
                  </button>
                ))}
              </div>
            </div>

            {/* Cold Drinks */}
            <div className="my-4 flex-1">
              <h3 className="mb-2 font-semibold">{t.ColdType}</h3>
              <div className="flex flex-wrap gap-2">
                {t.coldDrinks.map((drink, index) => (
                  <button
                    key={index}
                    className={`text-sm px-4 py-2 truncate border rounded-lg ${
                      selectedColdDrinks.includes(drink)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() =>
                      handleSelection(drink, setSelectedColdDrinks, selectedColdDrinks)
                    }
                  >
                    {drink}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Food Items */}
          <div className="my-4">
            <h3 className="mb-2 font-semibold">{t.FoodItem}</h3>
            <div className="grid grid-cols-2 gap-2">
              {t.foodItems.map((foodItem, index) => (
                <button
                  key={index}
                  className={`text-sm px-4 py-2 border rounded-lg ${
                    selectedFoodItems.includes(foodItem)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() =>
                    handleSelection(foodItem, setSelectedFoodItems, selectedFoodItems)
                  }
                >
                  {foodItem}
                </button>
              ))}
            </div>
          </div>

         {/* Servant Options */}
<div className="my-4">
  <h3 className="text-lg font-semibold mb-2">{t.Servant}</h3>
  <div className="flex md:flex-nowrap flex-wrap gap-4">
    <div className="flex items-center">
      <label>{t.male}</label>
      <select
        value={maleServants}
        onChange={(e) => setMaleServants(Number(e.target.value))}
        className="ml-2 p-2 border rounded w-20"
      >
        {/* Generate options from 0 to 10 */}
        {[...Array(11).keys()].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
    <div className="flex items-center">
      <label>{t.female}</label>
      <select
        value={femaleServants}
        onChange={(e) => setFemaleServants(Number(e.target.value))}
        className="ml-2 p-2 border rounded w-20"
      >
        {/* Generate options from 0 to 10 */}
        {[...Array(11).keys()].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>


          {/* Total Price */}
          <div className="my-4">
            <h3 className="text-lg font-semibold">
              {t.total}: AED {totalPrice}
            </h3>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Add to Cart */}
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg w-full"
            onClick={handleAddToCart}
          >
            {t.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomePackage;