import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// Checkmark SVG Icon
const CheckIcon = () => (
  <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <circle fill="#D87D4A" cx="32" cy="32" r="32" />
      <path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.8-15.8" />
    </g>
  </svg>
);

// Shorten name helper
const shortenName = (name) => {
  return name.replace("Headphones", "").replace("Earphones", "").replace("Speaker", "").replace("Mark", "MK");
};

const OrderConfirmationModal = () => {
  const { cartItems, grandTotal, removeAll } = useCart();
  const navigate = useNavigate();

  // Safety check in case cart is empty
  if (cartItems.length === 0) {
    return null;
  }

  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;

  const handleBackToHome = () => {
    removeAll(); // Clear the cart
    navigate("/"); // Go to homepage
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg p-8 md:p-12 max-w-lg w-full">
          <CheckIcon />
          <h2 className="text-h3 uppercase mt-8 mb-6">
            Thank You
            <br />
            For Your Order
          </h2>
          <p className="text-body text-black-full/50 mb-8">You will receive an email confirmation shortly.</p>

          {/* --- Summary --- */}
          <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
            {/* Left Side: Items */}
            <div className="flex-1 bg-gray-light p-6">
              <div className="flex items-center justify-between">
                <img src={firstItem.image} alt={firstItem.name} className="w-12 h-12 rounded" />
                <div className="flex-1 ml-4">
                  <p className="font-bold text-body">{shortenName(firstItem.name)}</p>
                  <p className="text-body font-bold text-black-full/50">$ {firstItem.price.toLocaleString()}</p>
                </div>
                <span className="font-bold text-body text-black-full/50">x{firstItem.quantity}</span>
              </div>

              {otherItemsCount > 0 && (
                <div className="text-center border-t border-black-full/20 mt-4 pt-4">
                  <p className="text-xs font-bold text-black-full/50">and {otherItemsCount} other item(s)</p>
                </div>
              )}
            </div>

            {/* Right Side: Grand Total */}
            <div className="flex-1 bg-black-full text-white p-6 flex flex-col justify-center">
              <span className="text-body uppercase text-white/50 mb-2">Grand Total</span>
              <span className="text-h6 font-bold">$ {grandTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button variant="primary" className="w-full mt-8" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationModal;
