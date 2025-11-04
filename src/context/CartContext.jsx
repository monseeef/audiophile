import React, { createContext, useContext, useState } from "react";

// --- Constants ---
const SHIPPING_COST = 50;
const VAT_RATE = 0.2; // 20%

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCartModal = () => setIsModalOpen(true);
  const closeCartModal = () => setIsModalOpen(false);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.categoryImage,
          quantity: quantity,
        },
      ]);
    }
    openCartModal();
  };

  const removeAll = () => {
    setCartItems([]);
  };

  // --- NEW CALCULATED VALUES ---
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = total > 0 ? SHIPPING_COST : 0;
  const vat = total * VAT_RATE; // VAT is 20% of the item total

  // As per the screenshot: Grand Total = Total + Shipping
  const grandTotal = total + shipping;
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const value = {
    isModalOpen,
    openCartModal,
    closeCartModal,
    cartItems,
    addToCart,
    removeAll,
    total,
    shipping, // <-- Add this
    vat, // <-- Add this
    grandTotal, // <-- Add this
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
