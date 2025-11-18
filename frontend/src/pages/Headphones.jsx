import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import CategoryMenu from "../components/CategoryMenu";
import About from "../components/About";
import { getProductsByCategory } from "../services/api"; // <-- Import our new API service

const Headphones = () => {
  const [headphoneProducts, setHeadphoneProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByCategory("headphones");
        setHeadphoneProducts(products);
      } catch (error) {
        console.error("Failed to fetch headphone products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <PageHeader title="Headphones" />

      {headphoneProducts.map((product, index) => (
        <ProductItem
          key={product.id}
          overline={product.newProduct ? "New Product" : null}
          title={product.name}
          description={product.description}
          image={product.categoryImage.desktop} // Assuming desktop image
          href={`/products/${product.slug}`}
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
