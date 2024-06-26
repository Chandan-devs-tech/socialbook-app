/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#7676c7",
      },
      screens: {
        m2xl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        mxl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mmd: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        msm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        mxs: { max: "425px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
