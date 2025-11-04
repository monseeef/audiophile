/* This file is now the single source of truth for all product data.
  It uses your exact asset folder structure.
*/

// --- Helper to get product asset paths ---
// (We'll assume .jpg for most, .png for ZX9)
const getProductPaths = (slug, ext = "jpg") => {
  return {
    image: `/assets/${slug}/desktop/image-product.${ext}`,
    categoryImage: `/assets/${slug}/desktop/image-category-page-preview.${ext}`,
    gallery: {
      g1: `/assets/${slug}/desktop/image-gallery-1.${ext}`,
      g2: `/assets/${slug}/desktop/image-gallery-2.${ext}`,
      g3: `/assets/${slug}/desktop/image-gallery-3.${ext}`,
    },
  };
};

export const products = {
  // --- HEADPHONES ---
  "xx99-mark-two-headphones": {
    id: "xx99-mark-two-headphones",
    slug: "product-xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    category: "headphones",
    ...getProductPaths("product-xx99-mark-two-headphones"),
    overline: "New Product",
    price: 2999,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for extended listening sessions. It also includes intuitive controls for volume and music playback, and a built-in microphone for taking calls on the go.\n\nThe advanced Active Noise Cancellation with built-in equalizers allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, comfort, and freedom.`,
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    recommendations: ["xx99-mark-one-headphones", "xx59-headphones", "zx9-speaker"],
  },
  "xx99-mark-one-headphones": {
    id: "xx99-mark-one-headphones",
    slug: "product-xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    category: "headphones",
    ...getProductPaths("product-xx99-mark-one-headphones"),
    overline: null,
    price: 1750,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed, accurate audio and unrivaled comfort for extended listening sessions. It is a brilliant companion for studio, home, or on the go.",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio-engineering expertise. This pair of headphones represents the pinnacle of premium craftsmanship... \n\nFrom the handcrafted materials to the balanced audio... The drivers are housed in a resonance-free housing... etc.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    recommendations: ["xx99-mark-two-headphones", "xx59-headphones", "zx9-speaker"],
  },
  "xx59-headphones": {
    id: "xx59-headphones",
    slug: "product-xx59-headphones",
    name: "XX59 Headphones",
    category: "headphones",
    ...getProductPaths("product-xx59-headphones"),
    overline: null,
    price: 899,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured via the latest wireless technology supporting new high-quality codecs and AAC.",
    inTheBox: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 1, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
    ],
    recommendations: ["xx99-mark-two-headphones", "xx99-mark-one-headphones", "zx9-speaker"],
  },

  // --- SPEAKERS ---
  "zx9-speaker": {
    id: "zx9-speaker",
    slug: "product-zx9-speaker",
    name: "ZX9 Speaker",
    category: "speakers",
    ...getProductPaths("product-zx9-speaker"),
    overline: "New Product",
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.",
    features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio playback... 

Inside the speaker sits a 1" silk dome tweeter and a 8" high-performance bass driver. Both are smart internal amplifiers, with class D inputs ensuring high fidelity and lower distortion.`,
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" },
    ],
    recommendations: ["zx7-speaker", "xx99-mark-one-headphones", "xx59-headphones"],
  },
  "zx7-speaker": {
    id: "zx7-speaker",
    slug: "product-zx7-speaker",
    name: "ZX7 Speaker",
    category: "speakers",
    ...getProductPaths("product-zx7-speaker"),
    overline: null,
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features:
      'Features a two-way driver design with a 1.5" tweeter and 7" woofer. Bluetooth connectivity with aptX and AAC codec support. Optical, RCA, and 3.5mm inputs. Subwoofer output for easy connection. Wood enclosure.',
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "7.5m Optical Cable" },
    ],
    recommendations: ["zx9-speaker", "xx99-mark-one-headphones", "xx59-headphones"],
  },

  // --- EARPHONES ---
  "yx1-earphones": {
    id: "yx1-earphones",
    slug: "product-yx1-earphones",
    name: "YX1 Wireless Earphones",
    category: "earphones",
    ...getProductPaths("product-yx1-earphones"),
    overline: "New Product",
    price: 599,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancelling feature.",
    features:
      "Experience impressive sound clarity with individual sound drivers for the highs, mids, and lows. The YX1 features precisely tuned 10mm drivers... \n\nThe YX1 is pre-paired with the included charging case straight out of the box. Simply open the case and connect via Bluetooth to start listening. Large capacity battery provides 30 hours of play time.",
    inTheBox: [
      { quantity: 2, item: "Earphone Unit" },
      { quantity: 6, item: "Multi-size Earplugs" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel Pouch" },
    ],
    recommendations: ["xx99-mark-one-headphones", "xx59-headphones", "zx9-speaker"],
  },
};

// Helper function to get all products in a specific category
export const getProductsByCategory = (category) => {
  return Object.values(products).filter((product) => product.category === category);
};
