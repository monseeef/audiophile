import React from "react";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import { Link } from "react-router-dom";

// This is the smaller quantity selector for the cart
const CartQuantityInput = ({ item, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="bg-gray-light flex items-center justify-between w-24 h-8">
      <button onClick={() => decreaseQuantity(item.id)} className="w-1/3 h-full text-black-full/50 hover:text-primary">-</button>
      <span className="w-1/3 h-full text-center leading-8 font-bold text-sub-title">{item.quantity}</span>
      <button onClick={() => increaseQuantity(item.id)} className="w-1/3 h-full text-black-full/50 hover:text-primary">+</button>
    </div>
  );
};

// Main Cart Modal Component
const CartModal = () => {
  const { cartItems, removeAll, total, cartCount, closeCartModal, increaseQuantity, decreaseQuantity } = useCart();

  // Shorten name for cart (e.g., "XX99 Mark II Headphones" -> "XX99 MK II")
  const shortenName = (name) => {
    return name.replace("Headphones", "").replace("Earphones", "").replace("Speaker", "").replace("Mark", "MK");
  };

  return (
    // --- POSITIONING FIX ---
    <div className="fixed top-24 left-0 right-0 z-50 flex justify-center">
      <div className="w-full max-w-[1110px] px-6 relative">
        {/* This is the modal box, aligned to the right */}
        <div className="absolute top-0 right-6 w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
          {/* ... all your cart content ... */}
          <div className="flex justify-between items-center mb-8">
            <h6 className="text-h6 uppercase">Cart ({cartCount})</h6>
            <button onClick={removeAll} className="text-body text-black-full/50 underline hover:text-primary">
              Remove all
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-body text-black-full/50 text-center">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                  <div className="flex-1 ml-4">
                    <p className="font-bold text-body">{shortenName(item.name)}</p>
                    <p className="text-body font-bold text-black-full/50">$ {item.price.toLocaleString()}</p>
                  </div>
                  <CartQuantityInput item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center my-8">
            <span className="text-body uppercase text-black-full/50">Total</span>
            <span className="text-h6">$ {total.toLocaleString()}</span>
          </div>

          <Link to={cartItems.length > 0 ? "/checkout" : "#"} onClick={cartItems.length > 0 ? closeCartModal : null}>
            <Button variant="primary" className="w-full" disabled={cartItems.length === 0}>
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
