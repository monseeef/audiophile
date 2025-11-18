import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import CategoryMenu from "../components/CategoryMenu";
import About from "../components/About";
import { getProductsByCategory } from "../services/api"; // <-- Import

const Speakers = () => {
  const [speakerProducts, setSpeakerProducts] = useState([]); // <-- Get speakers

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByCategory("speakers");
        setSpeakerProducts(products);
      } catch (error) {
        console.error("Failed to fetch speaker products:", error);
      }
    };

    fetchProducts();
  }, []);

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
            overline={product.newProduct ? "New Product" : null}
            title={product.name}
            description={product.description}
            image={product.categoryImage.desktop}
            href={`/products/${product.slug}`}
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
