/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rain: "url('./images/rainy2.jpg')",
        sunny: "url('./images/sunny.jpg')",
        cloudy: "url('./images/cloudy2.jpg')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
