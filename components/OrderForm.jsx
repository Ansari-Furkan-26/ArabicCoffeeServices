'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OrderForm = ({ language = "english" }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    guests: 1,
    eventDate: '',
    deliveryCharge: 0,
  });

  const cityCharges = {
    'Abu Dhabi': 300,
    'Ajman': 0,
    'Al Ain': 400,
    'Dubai': 0,
    'Fujairah': 300,
    'Ras Al Khaimah': 300,
    'Sharjah': 0,
    'Umm Al Quwain': 0,
  };

  const cities = Object.keys(cityCharges);

  // Load form data from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
      deliveryCharge: name === 'city' ? cityCharges[value] || 0 : formData.deliveryCharge,
    };

    setFormData(updatedFormData);

    // Save the updated data to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(updatedFormData));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Save the final data to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }

    // Refresh the page
    window.location.reload();
  };

  const renderInput = (label, name, type = 'text', additionalProps = {}) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
        required
        {...additionalProps}
      />
    </div>
  );

  const translations = {
    english: {
      title: "Please Enter Your Details",
      name: "Name",
      email: "Email",
      city: "City",
      phone: "Phone Number",
      guests: "Number of Guests",
      eventDate: "Date of Event",
      submitButton: "Confirm Details",
    },
    arabic: {
      title: "الرجاء إدخال تفاصيلك",
      name: "الاسم",
      email: "البريد الإلكتروني",
      city: "المدينة",
      phone: "رقم الهاتف",
      guests: "عدد الضيوف",
      eventDate: "تاريخ الحدث",
      submitButton: "تأكيد التفاصيل",
    },
  };

  const isFormValid = Object.values(formData).every((field) => field !== '' || field === 0);

  return (
    <div className="h-full" id="orderform">
      <div className="max-w-4xl w-full rounded-lg ">
        <h2 className="text-xl font-semibold mb-6">{translations[language].title}</h2>
        <form onSubmit={handleSubmit}>
          {renderInput(translations[language].name, 'name')}
          {renderInput(translations[language].email, 'email', 'email')}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{translations[language].city}</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-lg bg-transparent text-gray-700"
            >
              <option value="">{translations[language].city}</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{translations[language].phone}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              placeholder="Phone Number"
              className="p-2 border border-gray-300 rounded-lg flex-grow"
              required
            />
          </div>
          {renderInput(translations[language].guests, 'guests', 'number', { min: 10 })}
          {renderInput(translations[language].eventDate, 'eventDate', 'date')}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-green-600"
              disabled={!isFormValid}
            >
              {translations[language].submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
