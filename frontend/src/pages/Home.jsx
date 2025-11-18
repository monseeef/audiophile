import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryMenu from "../components/CategoryMenu";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <CategoryMenu />
        <FeaturedProducts />
        <About />
      </main>
    </div>
  );
};

export default Home;
