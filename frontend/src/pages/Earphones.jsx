import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ProductItem from "../components/ProductItem";
import CategoryMenu from "../components/CategoryMenu";
import About from "../components/About";
import { getProductsByCategory } from "../services/api";

const Earphones = () => {
  const [earphoneProducts, setEarphoneProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByCategory("earphones");
        setEarphoneProducts(products);
      } catch (error) {
        console.error("Failed to fetch earphone products:", error);
      }
    };

    fetchProducts();
  }, []);

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

export default Earphones;
