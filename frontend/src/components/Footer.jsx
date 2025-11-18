import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

// --- SVG Icons (Logo is the same) ---
const LOGO_PATH = "/public/assets/shared/desktop/logo.svg";

const SocialIcon = ({ href, children }) => (
  <a href={href} className="text-white hover:text-amber-600 transition-colors">
    {children}
  </a>
);

const Footer = () => {
  const NavLink = ({ href, children }) => (
    <Link to={href} className="text-sub-title uppercase tracking-2 font-bold hover:text-amber-600 transition-colors">
      {children}
    </Link>
  );

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-12">
      <Container className="relative">
        {/* Decorative Orange Bar */}
        <div className="absolute top-0 left-1/2 md:left-6 -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-amber-600" />

        {/* --- Top Section: Logo & Nav --- */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left lg:flex-row lg:justify-between lg:items-center">
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0 lg:mr-auto"
            aria-label="Audiophile homepage"
          >
            <img src={LOGO_PATH} alt="Audiophile Logo" className="w-36 h-auto" />
          </Link>
          <nav className="flex flex-col gap-4 mt-8 md:flex-row md:gap-8 lg:mt-0">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/headphones">Headphones</NavLink>
            <NavLink to="/speakers">Speakers</NavLink>
            <NavLink to="/earphones">Earphones</NavLink>
          </nav>
        </div>

        {/* --- Middle Section: Description & Socials --- */}
        <div className="my-12 text-center md:text-left md:flex md:justify-between md:items-end">
          <p className="text-body text-white/75 max-w-xl">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we're open 7 days a week.
          </p>
          <div className="flex gap-4 justify-center mt-12 md:mt-0">
            {/* Facebook Icon */}
            <SocialIcon href="#">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </SocialIcon>
            {/* Twitter Icon */}

            <SocialIcon href="#">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.936 20.644.523 19.86.218 19.094-.08 18.223-.28 16.947-.34 15.667-.398 15.26-.413 12-.413h0zm0 2.16c3.203 0 3.585.012 4.85.07 1.17.055 1.805.248 2.17.417.53.205.885.462 1.29.867.406.406.662.76.867 1.29.17.366.362.998.417 2.17.058 1.265.07 1.646.07 4.85s-.012 3.585-.07 4.85c-.055 1.17-.248 1.805-.417 2.17-.205.53-.462.885-.867 1.29-.406.406-.76.662-1.29.867-.366.17-.998.362-2.17.417-1.265.058-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.055-1.805-.248-2.17-.417-.53-.205-.885-.462-1.29-.867-.406-.406-.662-.76-.867-1.29-.17-.366-.362-.998-.417-2.17-.058-1.265-.07-1.646-.07-4.85s.012-3.585.07-4.85c.055-1.17.248 1.805.417 2.17.205.53.462.885.867.867.406.406.76.662 1.29.867.366.17.998.362 2.17.417 1.265-.058 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 112.881.002 1.441 1.441 0 01-2.881-.002z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="text-center md:text-left">
          <p className="text-body font-bold text-white/75">Copyright 2021. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
