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
        infoBgOrange: "#f9ae54",
        buttonHoverOrange: "#F8D8C7", // 248, 216, 199
        lightOrange: "#FFF6E8",
        orange: "#F7921B",
        darkOrange: "#FF7C40",
        lightGreen: "#C1DAD7",
        buttonDisableGrey: "#E3E7E7",
        lightGrey: "#484848",
        greyPlaceholder: "#969292",
      },
      textUnderlineOffset: {
        12: "12px", // 0.75rem
        15: "15px", // 0.938rem
        22: "22px", // 1.375rem
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
      backgroundImage: {
        "bulk-orders":
          "url('src/assets/imagesBulkOrders/Corporate-HeaderBanner.jpg')",
        "contact-us": "url('src/assets/imagesContactUs/Contact-Banner.jpg')",
      },
      width: {
        "3/10": "30%",
        "9/15": "60%",
        "10/15": "66.667%",
        "7/10": "70%",
        "11/15": "73.333%",
        "12/15": "80%",
        "13/15": "86.667%",
        "14/15": "93.333%",
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [],
};
