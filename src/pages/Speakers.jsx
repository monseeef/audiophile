import React from "react";
import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import CategoryMenu from "../components/CategoryMenu";
import About from "../components/About";
import { getProductsByCategory } from "../data"; // <-- Import

const Speakers = () => {
  const speakerProducts = getProductsByCategory("speakers"); // <-- Get speakers

  return (
    <div>
      <PageHeader title="Speakers" />

      {speakerProducts.map(
        (
          product,
          index // <-- Loop
        ) => (
          <ProductItem
            key={product.id}
            overline={product.overline}
            title={product.name}
            description={product.description}
            image={product.categoryImage}
            href={`/products/${product.id}`}
            reverse={index % 2 !== 0}
          />
        )
      )}

      <CategoryMenu />
      <About />
    </div>
  );
};

export default Speakers;
