import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data"; // Import your product data
import { useCart } from "../context/CartContext"; // Import the cart context

// Import all reusable components
import Container from "../components/Container";
import Button from "../components/Button";
import CategoryMenu from "../components/CategoryMenu";
import About from "../components/About";

// --- Internal Component for "Go Back" link ---
const GoBack = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="text-body text-black-full/50 hover:text-primary mb-8">
      Go Back
    </button>
  );
};

// --- Internal Component for "Quantity" selector ---
const QuantityInput = ({ quantity, setQuantity }) => {
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-light flex items-center justify-between w-32 h-12">
      <button
        onClick={handleDecrement}
        className="w-1/3 h-full text-black-full/50 hover:text-primary transition-colors"
      >
        -
      </button>
      <span className="w-1/3 h-full text-center leading-[48px] font-bold text-sub-title">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="w-1/3 h-full text-black-full/50 hover:text-primary transition-colors"
      >
        +
      </button>
    </div>
  );
};

// --- Internal Component for "You May Also Like" ---
const Recommended = ({ items }) => {
  return (
    <Container className="my-16 md:my-24">
      <h3 className="text-h3 uppercase text-center mb-16">You May Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((slug) => {
          // Get the full product data from the 'slug'
          const product = products[slug];
          if (!product) return null;
          return (
            <div key={product.id} className="flex flex-col items-center gap-8">
              <img src={product.categoryImage} alt={product.name} className="rounded-lg w-full" />
              <h5 className="text-h5 uppercase">{product.name}</h5>
              <Link to={`/products/${product.id}`}>
                <Button variant="primary">See Product</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

// --- MAIN PRODUCT DETAIL PAGE COMPONENT ---
const ProductDetail = () => {
  // --- HOOKS ---
  const { productId } = useParams(); // Get ID from URL (e.g., "xx99-mark-one-headphones")
  const { addToCart } = useCart(); // Get function from global cart context
  const [quantity, setQuantity] = useState(1); // Manage quantity for this page

  // --- DATA ---
  const product = products[productId]; // Load the correct product from our data.js

  // --- HANDLERS ---
  const handleAddToCart = () => {
    addToCart(product, quantity); // Add the current product and quantity to cart
  };

  // --- RENDER ---

  // Handle case where product ID is wrong and no product is found
  if (!product) {
    return (
      <Container className="py-24">
        <h1 className="text-h2 text-center">Product not found</h1>
        <div className="text-center mt-8">
          <Link to="/">
            <Button variant="primary">Go Home</Button>
          </Link>
        </div>
      </Container>
    );
  }

  // If product is found, render the page
  return (
    <div>
      <Container className="pt-8 md:pt-16">
        <GoBack />
      </Container>

      {/* --- Product Card --- */}
      <Container className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="rounded-lg w-full" />
        </div>
        <div className="flex-1">
          {product.overline && <span className="text-overline uppercase text-primary">{product.overline}</span>}
          <h1 className="text-h2 uppercase my-6">{product.name}</h1>
          <p className="text-body text-black-full/50 mb-8">{product.description}</p>
          <span className="text-h6 block mb-8">$ {product.price.toLocaleString()}</span>
          <div className="flex gap-4">
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Container>

      {/* --- Features & In the Box --- */}
      <Container className="my-16 md:my-24 flex flex-col lg:flex-row gap-24">
        <div className="lg:w-2/3">
          <h3 className="text-h3 uppercase mb-8">Features</h3>
          {/* Using whitespace-pre-line to respect newline characters (\n) in the data */}
          <p className="text-body text-black-full/50 whitespace-pre-line">{product.features}</p>
        </div>
        <div className="lg:w-1/3">
          <h3 className="text-h3 uppercase mb-8">In the Box</h3>
          <ul className="flex flex-col gap-2">
            {product.inTheBox.map((item) => (
              <li key={item.item} className="text-body">
                <span className="text-primary font-bold w-8 inline-block">{item.quantity}x</span>
                <span className="text-black-full/50">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* --- Image Gallery (Corrected Layout) --- */}
      <Container className="my-16 md:my-24">
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-8">
          <img
            src={product.gallery.g1}
            alt="Product gallery 1"
            className="rounded-lg w-full h-full object-cover md:col-span-2 md:row-span-1"
          />
          <img
            src={product.gallery.g2}
            alt="Product gallery 2"
            className="rounded-lg w-full h-full object-cover md:col-span-2 md:row-span-1"
          />
          <img
            src={product.gallery.g3}
            alt="Product gallery 3"
            className="rounded-lg w-full h-full object-cover md:col-span-3 md:row-span-2"
          />
        </div>
      </Container>

      {/* --- Recommended Products --- */}
      <Recommended items={product.recommendations} />

      {/* --- Other Sections --- */}
      <CategoryMenu />
      <About />
    </div>
  );
};

export default ProductDetail;
