import React from "react";
import Container from "./Container";

// --- Placeholder path for your asset ---
// You will likely have different images for desktop, tablet, and mobile
const bestGearImage = "/public/assets/man.png";

const About = () => {
  return (
    <Container className="my-12 md:my-24">
      {/*
        - flex-col: Stacks image on top of text (mobile-first)
        - lg:flex-row-reverse: Reverses the order on large screens,
          placing the image (first in DOM) on the right and 
          the text (second in DOM) on the left.
      */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-[125px]">
        {/* --- Image --- */}
        <div className="flex-1 w-full">
          <img
            src={bestGearImage}
            alt="Man wearing headphones and listening to music"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* --- Text Content --- */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-h2 uppercase max-w-md mx-auto lg:mx-0">
            Bringing you the
            <span className="text-primary"> best </span>
            audio gear
          </h2>
          <p className="text-body text-black-full/50 mt-8 max-w-xl mx-auto lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
