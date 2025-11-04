import React, { useState } from "react";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-between w-32 h-12">
      <button
        onClick={handleDecrement}
        className="w-1/3 h-full text-black-full/50 hover:text-amber-600 transition-colors"
      >
        -
      </button>
      <span className="w-1/3 h-full text-center leading-[48px] font-bold text-sub-title">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="w-1/3 h-full text-black-full/50 hover:text-amber-600 transition-colors"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
