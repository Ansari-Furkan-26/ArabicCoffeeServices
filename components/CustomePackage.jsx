"use client";
import React, { useState, useEffect } from "react";

const translations = {
  english: {
    select: "Make Your Own Package",
    HotType: "Select Hot Drinks",
    ColdType: "Select Cold Drinks",
    FoodItem: "Select Traditional Food Items",
    Servant: "Servant Options",
    male: "Male",
    female: "Female",
    total: "Total Price",
    addToCart: "Add to Cart",
    hotDrinks: [
        "Arabic coffee",
        "Turkish coffee",
        "Black Tea with Zaffran",
        "Green Tea",
        "Lemon Grass Tea",
        "Moroccan Tea",
        "Pineapple Tea with Cinnamon",
        "Apple Tea",
        "Habbat Al Hamra with Custard",
        "Cappuccino",
        "Hot Chocolate",
        "Rose with Custard",
        "Pistachio Latte",
        "Sahlab",
        "Milk with Ginger",
        "Milk with Zaffran",
        "Milk with Zaatar",
    ],
    coldDrinks: [
        "Faloodah",
        "Hibiscus",
        "Mojito Blueberry",
        "Mojito Passion Fruit",
        "Lemon with Lavender",
        "Pistachio latte",
        "Faloodah Strawberry",
        "Faloodah Mango",
        "Apricot drink",
        "Pina Colada",
        "Lemon with Mint",
        "Orange Juice",
        "Zaffran Drink",
        "Iced Tea with Peach",
        "Coconut Water",
    ],
    foodItems: [
      "Luqaimat",
      "Khubs shabab",
      "Khubs rigag",
      "Khubs khameer",
      "Mahallah Zayed",
      "Emarati Balaleet",
      "Khabees",
      "Dhango (Chick peas)",
    ],
  },
  arabic: {
    select: "اختر الحزمة",
    HotType: "اختر المشروبات الساخنة",
    ColdType: "اختر المشروبات الباردة",
    FoodItem: "اختر المواد الغذائية التقليدية",
    Servant: "خيار الخادم",
    male: "الخادم الذكر",
    female: "الخادمة الأنثى",
    total: "السعر الإجمالي",
    addToCart: "أضف إلى السلة",
    hotDrinks: [
      "القهوة العربية",
      "القهوة التركية",
      "شاي الكرك",
      "الشاي الأخضر",
      "شاي الليمون والعشب",
    ],
    coldDrinks: [
      "فالوده",
      "كركديه",
      "موهيتو بلو بيري",
      "موهيتو فاكهة العاطفة",
      "ليمون مع الخزامى",
    ],
    foodItems: [
      "فالوده فراولة",
      "فالوده مانجو",
      "كولادا الأناناس",
      "ليمون مع النعناع",
      "عصير البرتقال",
    ],
  },
};

const CustomePackage = ({ language }) => {
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
    const foodPrice = selectedFoodItems.length * 500;
    const servantPrice = (maleServants + femaleServants) * 500;
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
      setError("Kindly select at least one item from the above options.");
      return;
    }
    if (maleServants + femaleServants === 0) {
      setError("Kindly select at least one male or female servant.");
      return;
    }

    setError(""); // Clear errors if validation passes
    const cartData = {
      hotDrinks: selectedHotDrinks,
      coldDrinks: selectedColdDrinks,
      foodItems: selectedFoodItems,
      maleServants,
      femaleServants,
      totalPrice,
    };

    console.log("Cart Data:", cartData);
    localStorage.setItem("customPackage", JSON.stringify(cartData));
    alert("Package added to cart!");
  };

  return (
    <div className="p-4 bg-white rounded-xl max-w-md md:max-w-9xl lg:max-w-xl mx-auto mb-6 shadow-lg">
      <img
        src="https://i.pinimg.com/736x/ef/37/44/ef374482f186de6cd9e65100aea27b16.jpg"
        className="rounded-lg mb-4 w-full object-cover"
        alt=""
      />
      <h2 className="text-xl font-bold">{t.select}</h2>

      <div className="flex flex-col lg:flex-row md:gap-8">
        {/* Hot Drinks */}
        <div className="my-4 flex-1">
          <h3 className="font-semibold">{t.HotType}</h3>
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
          <h3 className="font-semibold">{t.ColdType}</h3>
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
        <h3 className="font-semibold">{t.FoodItem}</h3>
        <div className="grid grid-cols-2 gap-2">
          {t.foodItems.map((item, index) => (
            <button
              key={index}
              className={`text-sm px-4 py-2 truncate border rounded-lg ${
                selectedFoodItems.includes(item)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() =>
                handleSelection(item, setSelectedFoodItems, selectedFoodItems)
              }
            >
              {item}
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
        <input
          type="number"
          value={maleServants}
          onChange={(e) => setMaleServants(Number(e.target.value))}
          className="ml-2 p-2 border rounded w-20"
          min="0"
        />
      </div>
      <div className="flex items-center">
        <label>{t.female}</label>
        <input
          type="number"
          value={femaleServants}
          onChange={(e) => setFemaleServants(Number(e.target.value))}
          className="ml-2 p-2 border rounded w-20"
          min="0"
        />
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
  );
};

export default CustomePackage;
