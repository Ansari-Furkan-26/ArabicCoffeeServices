"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Summary = () => {
  const params = useSearchParams();
  const cartData = JSON.parse(params.get("cart")) || {};

  return (
    <div className="p-4 bg-white max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
      <div className="mb-4">
        <p>Hot Drinks: {cartData.hotDrinks?.join(", ") || "None"}</p>
        <p>Cold Drinks: {cartData.coldDrinks?.join(", ") || "None"}</p>
        <p>Food Items: {cartData.foodItems?.join(", ") || "None"}</p>
        <p>Male Servants: {cartData.maleServants}</p>
        <p>Female Servants: {cartData.femaleServants}</p>
        <p>Total Price: AED {cartData.totalPrice}</p>
      </div>
    </div>
  );
};

export default Summary;
