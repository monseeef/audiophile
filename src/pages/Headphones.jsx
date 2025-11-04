import React from "react";
import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import CategoryMenu from "../components/CategoryMenu";
import About from "../components/About";
import { getProductsByCategory } from "../data"; // <-- Import our data helpers

const Headphones = () => {
  const headphoneProducts = getProductsByCategory("headphones");

  return (
    <div>
      <PageHeader title="Headphones" />

      {headphoneProducts.map((product, index) => (
        <ProductItem
          key={product.id}
          overline={product.overline}
          title={product.name}
          description={product.description}
          // Use the correct 'categoryImage' path from our data
          image={product.categoryImage}
          href={`/products/${product.id}`}
          // Alternate layout (image left, image right)
          reverse={index % 2 !== 0}
        />
      ))}

      <CategoryMenu />
      <About />
    </div>
  );
};

export default Headphones;
