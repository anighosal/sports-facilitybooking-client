/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionProperty: {
        carousel: "transform",
      },
      colors: {
        primary: "#5656D3",
        secondary: "#0C76F0",
        third: "#C9DEF7",
        customGray: {
          light: "#D1D5DB",
          DEFAULT: "#6B7280",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
