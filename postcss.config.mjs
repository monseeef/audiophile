export default {
  plugins: {
    "@tailwindcss/postcss": {
      // This line forces it to load your config file
      config: "./tailwind.config.js",
    },
    autoprefixer: {},
  },
};
