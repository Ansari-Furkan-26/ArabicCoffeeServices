'use client';
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import OrderForm from "./OrderForm";

const translations = {
  english: {
    header: "Cart Summary",
    HotDrink: "Hot Drinks",
    ColdDrink: "Cold Drinks",
    Select: "Select",
    SelectedPackage: "Selected Package",
    title: "Package Title",
    price: "Package Price",
    drinks: "Drinks",
    fooditem: "Traditional Food items",
    selectedfood: "Selected Food Item",
    Charges: "Delivery Charges",
    total: "Total",
    clientEntries: "Client Entries",
    name: "Name",
    email: "Email",
    city: "City",
    phone: "Phone",
    guests: "Number of Guests",
    eventDate: "Event Date",
    TotalAmount: "Grand Total",
    thankYouTitle: "🎉 Thank You!",
    thankYouMessage: "Your order has been successfully submitted. We will reach out to you shortly.",
    specialOffer: "Special Offer: Order Package 3 or higher and get a complimentary Beverage or Perfume with your order.",
    order: "Order Now",
    Free: "Free",
    customPackageDetails: {
      header: "Custom Package Details",
      hotDrinks: "Hot Drinks",
      coldDrinks: "Cold Drinks",
      foodItems: "Food Items",
      maleServants: "Male Servants",
      femaleServants: "Female Servants",
      totalPrice: "Total Price",
      clearPackageMessage: "You cannot add more items now. Clear the current package to add more.",
    },
  },
  arabic: {
    header: "ملخص العربة",
    HotDrink: "المشروبات الساخنة",
    ColdDrink: "المشروبات الباردة",
    Select: "يختار",
    SelectedPackage: "الحزمة المختارة",
    title: "عنوان الحزمة",
    price: "سعر الباقة",
    drinks: "مشروبات",
    fooditem: "الأطعمة التقليدية",
    selectedfood: "صنف طعام مختار",
    Charges: "رسوم التوصيل",
    total: "المجموع",
    clientEntries: "بيانات العميل",
    name: "الاسم",
    email: "البريد الإلكتروني",
    city: "المدينة",
    phone: "الهاتف",
    guests: "عدد الضيوف",
    eventDate: "تاريخ الحدث",
    TotalAmount: "المجموع الإجمالي",
    thankYouTitle: "🎉 شكرًا لك",
    thankYouMessage: "لقد تم تقديم طلبك بنجاح. سوف نتواصل معك قريبا.",
    specialOffer: "عرض خاص: اطلب حزمة 3 أو أكثر واحصل على مشروب أو عطر مجاني مع طلبك.",
    order: "اطلب الآن",
    Free: "حر",
    customPackageDetails: {
      header: "تفاصيل الحزمة المخصصة",
      hotDrinks: "المشروبات الساخنة",
      coldDrinks: "المشروبات الباردة",
      foodItems: "أصناف الطعام",
      maleServants: "الخدم الذكور",
      femaleServants: "الخدم الإناث",
      totalPrice: "السعر الإجمالي",
      clearPackageMessage: "لا يمكنك إضافة المزيد من العناصر الآن. قم بمسح الحزمة الحالية لإضافة المزيد.",
    },
  },
};

const DELIVERY_CHARGES = {
  "Abu Dhabi": 300,
  "Ajman": 0,
  "Al Ain": 400,
  "Dubai": 0,
  "Fujairah": 300,
  "Ras Al Khaimah": 300,
  "Sharjah": 0,
  "Umm Al Quwain": 0,
};

const Cart = ({ onSelectPackage, language, selectedPackage = "Basic Package", selectedPackagePrice = 1000, onAddCustomPackage }) => {
  const [formData, setFormData] = useState({
    selectedPackage,
    selectedPackagePrice,
    name: "",
    email: "",
    city: "",
    phone: "",
    guests: "",
    eventDate: "",
  });
  const [isClient, setIsClient] = useState(false);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [customPackage, setCustomPackage] = useState(null);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language === "arabic" ? "ar" : "en";
  }, [language]);

  const t = translations[language] || translations.english;

  // Initialize formData, selectedDrinks, selectedFoodItems, and customPackage from localStorage
  useEffect(() => {
    setIsClient(true);
    const savedData = localStorage.getItem('formData');
    const savedDrinks = localStorage.getItem('selectedDrinks');
    const savedFoodItems = localStorage.getItem('selectedFoodItems');
    const savedCustomPackage = localStorage.getItem('customPackage');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData((prev) => ({
        ...prev,
        ...parsedData,
        selectedPackage: parsedData.selectedPackage || selectedPackage,
        selectedPackagePrice: parsedData.selectedPackagePrice || selectedPackagePrice,
      }));
    }

    if (savedDrinks) {
      setSelectedDrinks(JSON.parse(savedDrinks));
    }

    if (savedFoodItems) {
      setSelectedFoodItems(JSON.parse(savedFoodItems));
    }

    if (savedCustomPackage) {
      setCustomPackage(JSON.parse(savedCustomPackage));
    }
  }, [selectedPackage, selectedPackagePrice]);

  // Save formData to localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData, isClient]);

  // Save selectedDrinks to localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('selectedDrinks', JSON.stringify(selectedDrinks));
    }
  }, [selectedDrinks, isClient]);

  // Save selectedFoodItems to localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('selectedFoodItems', JSON.stringify(selectedFoodItems));
    }
  }, [selectedFoodItems, isClient]);

  // Save customPackage to localStorage
  useEffect(() => {
    if (isClient && customPackage) {
      localStorage.setItem('customPackage', JSON.stringify(customPackage));
    }
  }, [customPackage, isClient]);

  // Update formData when selectedPackage or selectedPackagePrice changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      selectedPackage,
      selectedPackagePrice,
    }));
  }, [selectedPackage, selectedPackagePrice]);

  // Function to remove the selected package
  const removeSelectedPackage = () => {
    setFormData((prev) => ({
      ...prev,
      selectedPackage: null,
      selectedPackagePrice: null,
    }));
    localStorage.removeItem('selectedPackage');
    localStorage.removeItem('selectedPackagePrice');
  };

  const removeDrink = (index) => setSelectedDrinks((prev) => prev.filter((_, i) => i !== index));
  const removeFoodItem = (index) => setSelectedFoodItems((prev) => prev.filter((_, i) => i !== index));

  const calculateTotal = () => {
    const drinksTotal = selectedDrinks.reduce((sum, drink) => sum + drink.price, 0);
    const foodTotal = selectedFoodItems.reduce((sum, food) => sum + food.price, 0);
    const deliveryCharge = DELIVERY_CHARGES[formData.city] || 0;
    const customPackagePrice = customPackage ? customPackage.totalPrice : 0;
    return (formData.selectedPackagePrice || 0) + drinksTotal + foodTotal + deliveryCharge + customPackagePrice;
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.guests.trim() !== "" &&
      formData.eventDate.trim() !== ""
    );
  };

  const handleOrderSubmit = () => {
    setShowThankYouPopup(true);

    // Pre-calculate data for better performance
    const totalAmount = calculateTotal();
    const deliveryCharge = DELIVERY_CHARGES[formData.city] || 0;

    // Generate details for the selected package
    const selectedPackageDetails = formData.selectedPackage
      ? `
      *Selected Package:* 
      - Package Title: ${formData.selectedPackage}
      - Package Price: ${formData.selectedPackagePrice || 0} AED
      `
      : "";

    // Generate details for the custom package
    const customPackageDetails = customPackage
      ? `
      *Custom Package Details:*
      - Hot Drinks: ${customPackage.hotDrinks.join(", ") || "N/A"}
      - Cold Drinks: ${customPackage.coldDrinks.join(", ") || "N/A"}
      - Food Items: ${customPackage.foodItems.join(", ") || "N/A"}
      - Male Servants: ${customPackage.maleServants || 0}
      - Female Servants: ${customPackage.femaleServants || 0}
      - Custom Package Total: ${customPackage.totalPrice || 0} AED
      `
      : "";

    // Combine package details (if both exist, show both; otherwise, show only the available one)
    const packageDetails = `${selectedPackageDetails}${customPackageDetails}`.trim() || "*Package Details: N/A*";

    // Client information
    const clientInfo = `
      *Client Information:*
      - Name: ${formData.name || "N/A"}
      - Email: ${formData.email || "N/A"}
      - City: ${formData.city || "N/A"}
      - Phone: ${formData.countryCode ? `${formData.countryCode} ${formData.phone}` : formData.phone || "N/A"}
      - Guests: ${formData.guests || "N/A"}
      - Event Date: ${formData.eventDate || "N/A"}
    `.trim();

    // Final message
    const message = `
      Hello, I would like to place an order. Here are the details:
      
      ${packageDetails}
      
      ${clientInfo}
      
      *Delivery Charge:* ${deliveryCharge} AED
      
      *Total Amount:* ${totalAmount} AED
    `.trim();

    // Encode the message to be sent via WhatsApp
    const whatsappLink = `https://wa.me/+971503665518?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    // Clear localStorage after the WhatsApp message is sent
    resetForm();
  };

  // Function to reset the form fields
  const resetForm = () => {
    setFormData((prev) => ({
      ...prev,
      name: "",
      email: "",
      city: "",
      phone: "",
      guests: "",
      eventDate: "",
      selectedPackage: null,
      selectedPackagePrice: null,
    }));
    setSelectedDrinks([]);
    setSelectedFoodItems([]);
    setCustomPackage(null);
    localStorage.removeItem('formData');
    localStorage.removeItem('selectedDrinks');
    localStorage.removeItem('selectedFoodItems');
    localStorage.removeItem('customPackage');
    localStorage.removeItem('selectedPackage');
    localStorage.removeItem('selectedPackagePrice');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center" id="cart">
      <div className="hidden md:block h-full w-full p-8">
        <img 
          src="https://i.pinimg.com/736x/36/db/a0/36dba0a1d51aab032bb4855f8075b8c3.jpg" 
          alt="Package Image" 
          className="object-cover max-h-full w-full rounded-xl"
        />
      </div>
      <div className="max-w-6xl w-full bg-gray-50 rounded-lg py-8 px-3 md:p-8">
        <h1 className="text-2xl font-bold text-center">{t.header}</h1>

        {/* Selected Package Details */}
        <div className="border rounded-lg p-4 my-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">{t.SelectedPackage}</h2>

          {formData.selectedPackage && formData.selectedPackagePrice && (
            <>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.title}:</span>
                <span>{formData.selectedPackage}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.price}:</span>
                <span>{formData.selectedPackagePrice} AED</span>
                <button
                  className="text-red-500 font-bold hover:text-red-700"
                  onClick={removeSelectedPackage}
                >
                  <MdDelete />
                </button>
              </div>
            </>
          )}

          {/* Display Custom Package, if Any */}
          {customPackage && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{t.customPackageDetails.header}:</h3>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.customPackageDetails.hotDrinks}:</span>
                <span>{customPackage.hotDrinks.join(", ") || t.Select}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.customPackageDetails.coldDrinks}:</span>
                <span>{customPackage.coldDrinks.join(", ") || t.Select}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.customPackageDetails.foodItems}:</span>
                <span>{customPackage.foodItems.join(", ") || t.Select}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.customPackageDetails.maleServants}:</span>
                <span>{customPackage.maleServants || 0}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.customPackageDetails.femaleServants}:</span>
                <span>{customPackage.femaleServants || 0}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">{t.customPackageDetails.totalPrice}:</span>
                <span>{customPackage.totalPrice} AED</span>
                <button
                  className="text-red-500 font-bold hover:text-red-700"
                  onClick={() => setCustomPackage(null)}
                >
                  <MdDelete />
                </button>
              </div>

              <div className="border-l-4 border-red-500 bg-red-100 p-4 rounded-lg flex items-start">
                  <p className="text-red-600 text-sm md:text-base">
                  {t.customPackageDetails.clearPackageMessage}</p>
              </div>

            </div>
          )}

          {/* Display Selected Drinks, if Any */}
          {selectedDrinks.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{t.drinks}:</h3>
              {selectedDrinks.map((drink, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span>{drink.type}: {drink.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{drink.price} AED</span>
                    <button
                      className="ml-4 text-red-500 font-bold hover:text-red-700"
                      onClick={() => removeDrink(index)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Display Selected Food Items, if Any */}
          {selectedFoodItems.length > 0 && (
            <div className="mb-">
              <h3 className="font-semibold ">{t.selectedfood}:</h3>
              {selectedFoodItems.map((food, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <div>{food.name}</div>
                  <div className="flex items-center">
                    <span>{food.price} AED</span>
                    <button
                      className="ml-4 text-red-500 font-bold hover:text-red-700"
                      onClick={() => removeFoodItem(index)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Form */}
        <OrderForm
          language={language}
          formData={formData}
          setFormData={setFormData}
          resetForm={resetForm}
        />

        {/* Delivery Charges */}
        <div className="flex justify-between mt-4 text-lg">
          <span>{t.Charges}:</span>
          <span>
            {DELIVERY_CHARGES[formData.city] === 0 ? `${t.Free}` : `${DELIVERY_CHARGES[formData.city]} AED`}
          </span>
        </div>

        {/* Total Price */}
        <div className="flex justify-between mt-4 text-lg font-bold">
          <span>{t.TotalAmount}:</span>
          <span>{calculateTotal()} AED</span>
        </div>

        {/* Place Order Button */}
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          onClick={handleOrderSubmit}
          disabled={!isFormValid()}
        >
          {t.order}
        </button>

        {/* Thank You Popup */}
        {showThankYouPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold mb-4">{t.thankYouTitle}</h2>
              <p>{t.thankYouMessage}</p>
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                onClick={() => setShowThankYouPopup(false)}
              >
                {language === "arabic" ? "إغلاق" : "Close"}
              </button>
            </div>
          </div> 
        )}
      </div>
    </div>
  );
};

export default Cart;