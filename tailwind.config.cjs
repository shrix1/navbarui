/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
      },
      colors: {
        tblue: "#1DA1F2",
        whitegray: "#F5F5F8",
        gray: "#64748B",
      },
    },
  },
  plugins: [],
};
