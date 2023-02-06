/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        permanentMarker: ['"Permanent Marker"'],
        montserrat: ['"Montserrat"'],
      },

      fontSize: {
        smallNote: "12px",
        xxxs: "14px",
        xxs: "16px",
        xs: "18px",
        sm: "40px",
        lg: "54px",
      },
      colors: {
        darkBlue: "#2D65A2",
        lightBlue: "#3670AD",
        darkBlueFont: "#2A64A0",
        lightOrange: "#FFF6E8",
        orange: "#F7921B",
        darkOrange: "#FF7C40",
        lightGreen: "#C1DAD7",
        lightGrey: "#484848",
      },
      textUnderlineOffset: {
        22: "22px",
      },
      borderRadius: {
        extraLarge: "8rem",
        large: "1.5rem",
      },
      margin: {
        superLargeNegative: "-350px",
        largeNegative: "-220px",
        mediumNegative: "-150px",
        negative: "-50px",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        bounceShort: "bounce 1s ease-in-out 2",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [],
};
