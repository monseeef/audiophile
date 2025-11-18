import React from "react";
import { Link } from "react-router-dom";

/**
 * A reusable button component based on the design system.
 *
 * @param {object} props
 * @param {('primary' | 'secondary' | 'ghost')} props.variant - The button style variant.
 * @param {string} [props.className] - Additional class names.
 * @param {React.ReactNode} props.children - The content of the button.
 */
const Button = ({ to, variant = "primary", className = "", children, ...props }) => {
  // Base styles for all buttons
  const baseStyle = "uppercase text-sub-title font-bold tracking-1 px-8 py-3.5 transition-colors duration-300";

  // Variant-specific styles
  let variantStyle = "";
  switch (variant) {
    case "secondary":
      // Button 2 Default
      variantStyle = "bg-transparent border border-black-full text-black-full hover:bg-black-full hover:text-white";
      break;
    case "ghost":
      // Button 3 Default
      variantStyle = "bg-transparent text-black-full/50 hover:text-primary";
      break;
    case "primary":
    default:
      // Button 1 Default
      variantStyle = "bg-primary text-white hover:bg-primary-light";
      break;
  }
  const allClassNames = `${baseStyle} ${variantStyle} ${className}`;

  // 2. If a 'to' prop is given, render a <Link>
  if (to) {
    return (
      <Link to={to} className={allClassNames} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={allClassNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
