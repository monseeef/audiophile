import React from "react";
import Container from "./Container";
import ShopLink from "./ShopLink";

// --- Placeholder paths for your assets ---
const headphonesImg = "/assets/shared/desktop/image-category-thumbnail-headphones.png";
const speakersImg = "/assets/shared/desktop/image-category-thumbnail-speakers.png";
const earphonesImg = "/assets/shared/desktop/image-category-thumbnail-earphones.png";

// --- Main Component ---
const CategoryMenu = () => {
  return (
    <Container className="my-12 md:my-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-4 lg:gap-8">
        <CategoryCard image={headphonesImg} title="Headphones" href="/headphones" />
        <CategoryCard image={speakersImg} title="Speakers" href="/speakers" />
        <CategoryCard image={earphonesImg} title="Earphones" href="/earphones" />
      </div>
    </Container>
  );
};

// --- Sub-component for each category card ---
const CategoryCard = ({ image, title, href }) => {
  return (
    <div className="relative flex-1">
      {/* Background Card */}
      <div className="bg-gray-100 rounded-lg text-center pt-24 pb-5">
        <h6 className="text-h6 uppercase tracking-1.3 font-bold mb-4">{title}</h6>
        <ShopLink href={href} />
      </div>

      {/* Overlapping Image */}
      {/* We use absolute positioning to lift the image up.
        - `absolute top-0`: Pins it to the top of the relative parent.
        - `translate-y-[-35%]`: Pulls it up by 35% of its own height.
        - `left-1/2 -translate-x-1/2`: Centers it horizontally.
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-35%] w-full max-w-[150px] md:max-w-[130px] lg:max-w-[150px]">
        <img src={image} alt={title} className="w-full" />
      </div>
    </div>
  );
};

export default CategoryMenu;
