/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  safelist: ["bg-primary", "font-manrope", "text-body", "text-h1", "text-h2", "text-h3", "text-h4"],
  theme: {
    extend: {
      // 1. COLORS
      colors: {
        primary: "#D87D4A",
        "primary-light": "#FBAF85",
        "black-full": "#000000",
        "black-light": "#101010",
        "black-hover": "#4C4C4C",
        "gray-light": "#F1F1F1",
        "gray-bg": "#FAFAFA",
        white: "#FFFFFF",
        error: "#CD2C2C",
        dummy: "#000000",
      },

      // 2. FONT FAMILY
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },

      // 3. TYPOGRAPHY
      fontSize: {
        h1: ["56px", { lineHeight: "58px", letterSpacing: "2px", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "44px", letterSpacing: "1.5px", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "36px", letterSpacing: "1.15px", fontWeight: "700" }],
        h4: ["28px", { lineHeight: "38px", letterSpacing: "2px", fontWeight: "700" }],
        h5: ["24px", { lineHeight: "33px", letterSpacing: "1.7px", fontWeight: "700" }],
        h6: ["18px", { lineHeight: "24px", letterSpacing: "1.3px", fontWeight: "700" }],
        overline: ["14px", { lineHeight: "19px", letterSpacing: "10px", fontWeight: "400" }],
        "sub-title": ["13px", { lineHeight: "25px", letterSpacing: "1px", fontWeight: "700" }],
        body: ["15px", { lineHeight: "25px", fontWeight: "500" }],
      },

      // 4. Letter spacing
      letterSpacing: {
        10: "10px",
        2: "2px",
        1.5: "1.5px",
        1.15: "1.15px",
        1.7: "1.7px",
        1.3: "1.3px",
        1: "1px",
      },
    },
  },
  plugins: [],
};
