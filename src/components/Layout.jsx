import React from "react";
import { Outlet } from "react-router-dom";
import CartModal from "./CartModal"; // <-- 1. Import
import Backdrop from "./Backdrop";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import Container from "./Container";

const Layout = () => {
  const { isModalOpen } = useCart();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {isModalOpen && (
        <>
          <Backdrop />
          <CartModal />
        </>
      )}
    </div>
  );
};

export default Layout;
