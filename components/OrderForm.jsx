'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OrderForm = ({ language = 'english' }) => {
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

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    city: false,
    phone: false,
    guests: false,
    eventDate: false,
  });

  const cityCharges = {
    'Abu Dhabi': 300,
    Ajman: 0,
    'Al Ain': 400,
    Dubai: 0,
    Fujairah: 300,
    'Ras Al Khaimah': 300,
    Sharjah: 0,
    'Umm Al Quwain': 0,
  };

  const cities = Object.keys(cityCharges);

  // Load saved form data from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('formData');
      try {
        const parsedData = JSON.parse(savedData);
        if (parsedData && typeof parsedData === 'object') {
          setFormData(parsedData);
        }
      } catch (e) {
        console.error('Invalid data in localStorage', e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
      deliveryCharge: name === 'city' ? cityCharges[value] ?? 0 : formData.deliveryCharge,
    };

    setFormData(updatedFormData);

    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(updatedFormData));
    }

    // Clear error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      city: formData.city.trim() === '',
      phone: !/^\d{10}$/.test(formData.phone),
      guests: formData.guests <= 0,
      eventDate: formData.eventDate.trim() === '',
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
    if (!isFormValid) return;

    console.log('Form submitted:', formData);

    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }

    // Redirect to a thank-you page or reset the form
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
      {errors[name] && (
        <div className="text-red-500 text-sm mt-1">{translations[language][`${name}Error`]}</div>
      )}
    </div>
  );

  const translations = {
    english: {
      title: 'Please Enter Your Details',
      name: 'Name',
      email: 'Email',
      city: 'City',
      phone: 'Phone Number',
      guests: 'Number of Guests',
      eventDate: 'Date of Event',
      submitButton: 'Confirm Details',
      nameError: 'Please fill in the name field.',
      emailError: 'Please fill in the email field.',
      cityError: 'Please select a city.',
      phoneError: 'Please enter a valid 10-digit phone number.',
      guestsError: 'Please enter a valid number of guests.',
      eventDateError: 'Please select a date for the event.',
    },
    arabic: {
      title: 'الرجاء إدخال تفاصيلك',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      city: 'المدينة',
      phone: 'رقم الهاتف',
      guests: 'عدد الضيوف',
      eventDate: 'تاريخ الحدث',
      submitButton: 'تأكيد التفاصيل',
      nameError: 'يرجى ملء حقل الاسم.',
      emailError: 'يرجى ملء حقل البريد الإلكتروني.',
      cityError: 'يرجى اختيار مدينة.',
      phoneError: 'يرجى إدخال رقم هاتف صالح من 10 أرقام.',
      guestsError: 'يرجى إدخال عدد صحيح من الضيوف.',
      eventDateError: 'يرجى اختيار تاريخ للحدث.',
    },
  };

  return (
    <div className="h-full" id="orderform">
      <div className="max-w-4xl w-full rounded-lg">
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
            {errors.city && (
              <div className="text-red-500 text-sm mt-1">{translations[language].cityError}</div>
            )}
          </div>
          {renderInput(translations[language].phone, 'phone', 'tel', { minLength: 10, maxLength: 10 })}
          {renderInput(translations[language].guests, 'guests', 'number', { min: 10 })}
          {renderInput(translations[language].eventDate, 'eventDate', 'date')}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600"
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
