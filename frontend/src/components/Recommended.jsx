import React from "react";
import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router-dom";

// This sub-component is for each of the 3 items
const RecommendedItem = ({ image, title, href }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <img src={image} alt={title} className="rounded-lg w-full" />
      <h5 className="text-h5 uppercase">{title}</h5>
      <Link to={href}>
        <Button variant="primary">See Product</Button>
      </Link>
    </div>
  );
};

// Main component
const Recommended = () => {
  // TODO: This data should be dynamic based on the product
  const items = [
    {
      image: "/public/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
      title: "XX99 Mark I",
      href: "/products/xx99-mark-one",
    },
    { image: "/public/assets/product-xx59-headphones/desktop/image-product.jpg", title: "XX59", href: "/products/xx59" },
    {
      image: "/public/assets/product-zx9-speaker/desktop/image-product.jpg",
      title: "ZX9 Speaker",
      href: "/products/zx9",
    },
  ];

  return (
    <Container className="my-16 md:my-24">
      <h3 className="text-h3 uppercase text-center mb-16">You May Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <RecommendedItem key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Recommended;
