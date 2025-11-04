import React from "react";
import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import CategoryMenu from "../components/CategoryMenu";
import About from "../components/About";

import { getProductsByCategory } from "../data";

const Earphones = () => {
  const earphoneProducts = getProductsByCategory("earphones");

  return (
    <div>
      <PageHeader title="Earphones" />

      {earphoneProducts.map(
        (
          product,
          index // <-- Loop
        ) => (
          <ProductItem
            key={product.id}
            // ... (all props)
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

export default Earphones;
