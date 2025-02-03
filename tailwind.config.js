/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Sans", "serif"],
        Op: ["Open Sans", "serif"],
      },
      colors: {
        primary: "white",
        secondary: "#333333AD",
        third: "#fef9c3",
        button: "#3ECF4C",
        darkPrimary: "#222325",
      },
    },
    plugins: [],
  },
};
