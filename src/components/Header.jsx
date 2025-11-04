import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const LOGO_PATH = "/assets/shared/desktop/logo.svg";
const CART_ICON_PATH = "/assets/shared/desktop/icon-cart.svg";
const HAMBURGER_ICON_PATH = "/assets/hamburger.svg";

const HamburgerIcon = () => <img src={HAMBURGER_ICON_PATH} alt="Menu" className="w-4 h-4" />;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCartModal, cartCount } = useCart();

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="text-sub-title uppercase tracking-2 font-bold hover:text-amber-600 transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="bg-gray-950 text-white z-50">
      <Container>
        <div className="flex items-center justify-between py-8">
          {/* --- Hamburger (Mobile/Tablet) --- */}
          <button className="lg:hidden z-20" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <HamburgerIcon />
          </button>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0 lg:mr-auto"
            aria-label="Audiophile homepage"
            onClick={() => setIsMenuOpen(false)} // Close mobile menu when logo is clicked
          >
            <img src={LOGO_PATH} alt="Audiophile Logo" className="w-36 h-auto" /> {/* Use <img> */}
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden lg:flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/headphones">Headphones</NavLink>
            <NavLink to="/speakers">Speakers</NavLink>
            <NavLink to="/earphones">Earphones</NavLink>
          </nav>

          {/* --- Cart Icon --- */}
          <button onClick={openCartModal} className="ml-auto lg:ml-8 relative z-20" aria-label="View cart">
            <img src={CART_ICON_PATH} alt="Cart" className="w-5 h-5" /> {/* Use <img> */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <hr className="border-t border-white/20" />
      </Container>

      {/* --- Mobile Menu (Dropdown) --- */}
      {/* This is a simple dropdown. For a better UX, you might want this
        to slide in and cover the screen, which would involve the <CategoryMenu>
      */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-6 p-8">
            <Link to="/" className="text-black-light text-h6 uppercase">
              Home
            </Link>
            <Link to="/headphones" className="text-black-light text-h6 uppercase">
              Headphones
            </Link>
            <Link to="/speakers" className="text-black-light text-h6 uppercase">
              Speakers
            </Link>
            <Link to="/earphones" className="text-black-light text-h6 uppercase">
              Earphones
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
