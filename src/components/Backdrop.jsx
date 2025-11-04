import React from "react";
import { useCart } from "../context/CartContext";

const Backdrop = () => {
  const { closeCartModal } = useCart();

  return <div onClick={closeCartModal} className="fixed inset-0 bg-black/40 z-40" />;
};

export default Backdrop;
