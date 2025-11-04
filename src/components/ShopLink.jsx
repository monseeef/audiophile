import React from "react";
import { Link } from "react-router-dom";

const ShopLink = ({ href, className = "" }) => {
  return (
    <Link
      to={href}
      className={`group text-sub-title uppercase text-black-full/50 font-bold tracking-1 flex items-center justify-center gap-3 transition-colors hover:text-amber-600 ${className}`}
    >
      <span>Shop</span>
      <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg" className="stroke-amber-600" fill="none">
        <path d="M1.322 1l5 5-5 5" strokeWidth="2" />
      </svg>
    </Link>
  );
};

export default ShopLink;
