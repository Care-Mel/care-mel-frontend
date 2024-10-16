/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Pro"],
      },
      fontSize: {
        header: ["28px"],
        body: ["18px"],
        cardheader: ["22px"],
        cardbody: ["14px"],
      },
    },
    colors: {
      white: "#FFFFFF",
      primary: "#388E3C", // Custom primary color
      secondary: "#C8E6C9", // Custom secondary color
      accent: "#FBBF24", // Custom accent color
      active: "#00FF00",
      expired: "#FF0000",
      pending: "#FFFF00",
      // Add more custom colors as needed
    },
    // screens: {
    //   sm: "576px",
    //   // => @media (min-width: 576px) { ... }

    //   md: "960px",
    //   // => @media (min-width: 960px) { ... }

    //   lg: "1440px",
    //   // => @media (min-width: 1440px) { ... }
    // },
  },
  plugins: [],
};
