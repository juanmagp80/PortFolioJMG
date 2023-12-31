/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        circle: "circle 2s infinite linear",

        float: "float 2s infinite",
        moveInLeft: "moveInLeft 2s fowards",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "3xl": "4.0px 8.0px 8.0px rgba(0,0,0,0.38)",
      },
      gradients: {
        portfolio: [
          "108.46deg",
          "rgba(255,255,255,.264) 0%",
          "rgba(255,255,255,.066) 100%",
        ],
      },
    },
  },
  plugins: [],
};
