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
        xs: "18px",
        sm: "40px",
        lg: "54px",
      },
      colors: {
        darkBlue: "#2D65A2",
        lightBlue: "#3670AD",
        orange: "#F7921B",
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
    },
  },
  plugins: [],
};