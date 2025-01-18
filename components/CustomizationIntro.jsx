import React, { useEffect, useState } from 'react';

const CustomizationIntro = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure that this is rendered on the client side
  }, []);

  const handleButtonClick = () => {
    router.push('/your-special-coffee-pack');
  };

  if (!isClient) return null; // Avoid rendering before client-side mount

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100  p-6 rounded-lg shadow-lg">
      {/* Left Section - Text */}
      <div className="text-black max-w-md">
        <h1 className="text-3xl font-semibold mb-4">
          Customize Your Perfect Coffee Package!
        </h1>
        <p className="text-lg mb-6">
          Want a special coffee experience with personalized options like hot and cold drinks, food items, and dedicated servers? 
          You're just a click away from crafting your dream coffee package tailored to your taste.
        </p>
        <a href="/your-special-coffee-pack">
        <button
          className="px-6 py-3 bg-black text-gray-50  rounded-lg shadow-lg transition-all"
        >
          Create Your Special Package
        </button></a>
      </div>

      {/* Right Section - Image */}
      <div className="mt-6 md:mt-0 md:w-1/2">
        <img
          src="https://i.pinimg.com/736x/14/b1/50/14b150f878c0fc72a6ef4cbfbf281c6c.jpg" // Replace with the URL of your image
          alt="Coffee Package"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CustomizationIntro;
