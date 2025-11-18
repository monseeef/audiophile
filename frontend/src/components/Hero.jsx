import React from "react";
import Button from "./Button";
import Container from "./Container";

// IMPORTANT: You need to add your images to the public folder
// or import them directly. I'm using a placeholder path.
const heroBackgroundImage = "/public/assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <div className="bg-gray-950">
      <Container className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-sm text-white">
          <span className="text-overline uppercase text-white/50">New Product</span>
          <h1 className="text-h1 uppercase my-6">XX99 Mark II Headphones</h1>
          <p className="text-body font-light text-white/75 mb-10">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Button variant="primary" to="/products/xx99-mark-two-headphones">
            See Product
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
