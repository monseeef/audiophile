import React from "react";
import Container from "./Container";
import Button from "./Button";

// --- Placeholder paths for your assets ---
// You should import these or place them in your /public folder
const zx9SpeakerImage = "/public/assets/home/desktop/image-speaker-zx9.png";
const zx7SpeakerImage = "/public/assets/home/desktop/image-speaker-zx7.jpg";
const yx1EarphonesImage = "/public/assets/home/desktop/image-earphones-yx1.jpg";
const circlePattern = "/public/assets/home/desktop/pattern-circles.svg";

// --- Main Component ---
const FeaturedProducts = () => {
  return (
    <Container className="py-12 md:py-24">
      <div className="flex flex-col gap-6 md:gap-8">
        <Zx9SpeakerAd />
        <Zx7SpeakerAd />
        <Yx1EarphonesAd />
      </div>
    </Container>
  );
};

// --- Sub-component for ZX9 Speaker ---
const Zx9SpeakerAd = () => {
  return (
    <div className="bg-primary  rounded-lg p-6 md:p-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative">
      <img
        src={circlePattern}
        alt=""
        className="absolute z-10 -top-1/4 left-0 lg:-top-1/4 lg:-left-1/4 max-w-none w-full lg:w-[944px] lg:h-[944px]"
      />

      {/* Product Image */}
      <div className="relative z-20 w-1/2 max-w-[200px] lg:max-w-none lg:w-2/5 lg:-mb-8">
        <img src={zx9SpeakerImage} alt="ZX9 Speaker" className="w-full" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center lg:text-left text-white max-w-xs mt-8 lg:mt-0 lg:w-3/5 lg:pl-16">
        <h2 className="text-h2 uppercase">
          ZX9
          <br />
          Speaker
        </h2>
        <p className="text-body font-light opacity-75 my-6">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        {/* We use the "secondary" variant here, but style it to look black */}
        <Button
          to="/products/zx9-speaker"
          variant="secondary"
          className="bg-black-full border-black-full text-white hover:bg-black-hover hover:border-black-hover"
        >
          See Product
        </Button>
      </div>
    </div>
  );
};

// --- Sub-component for ZX7 Speaker ---
const Zx7SpeakerAd = () => {
  return (
    <div
      className="rounded-lg h-[320px] bg-cover bg-center flex items-center p-6 md:p-12 lg:px-24"
      style={{ backgroundImage: `url(${zx7SpeakerImage})` }}
    >
      <div className="text-black-light">
        <h3 className="text-h4 uppercase mb-8">ZX7 Speaker</h3>
        <Button variant="secondary" to="/products/zx7-speaker">
          See Product
        </Button>
      </div>
    </div>
  );
};

// --- Sub-component for YX1 Earphones ---
const Yx1EarphonesAd = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Image Part */}
      <div className="w-full md:w-1/2">
        <img src={yx1EarphonesImage} alt="YX1 Earphones" className="rounded-lg w-full h-full object-cover" />
      </div>

      {/* Content Part */}
      <div className="w-full md:w-1/2 bg-gray-light rounded-lg h-full min-h-[400px] flex items-center p-6 md:p-12 lg:px-24">
        <div>
          <h3 className="text-h4 uppercase mb-8">YX1 Earphones</h3>
          <Button variant="secondary" to="/products/yx1-earphones">
            See Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
