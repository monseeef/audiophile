import React from "react";
import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router-dom"; // <-- Use Link

const ProductItem = ({ title, description, overline, image, reverse = false, href }) => {
  return (
    <Container className="my-16 md:my-24">
      {/* This 'reverse' prop is what changes the layout */}
      <div className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* --- Image --- */}
        <div className="flex-1 w-full">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* --- Text Content --- */}
        <div className="flex-1 text-center lg:text-left">
          {overline && <span className="text-overline uppercase text-primary">{overline}</span>}
          <h2 className="text-h2 uppercase my-6">{title}</h2>
          <p className="text-body text-black-full/50 mb-10 max-w-xl mx-auto lg:mx-0">{description}</p>

          <Link to={href}>
            <Button variant="primary">See Product</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductItem;
