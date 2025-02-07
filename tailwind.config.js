/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C48F0",
        secondary: {
          DEFAULT: "#FDAF4D",
          dark: "#FF6A56",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/bg_hero.jpg')",
        "footer-pattern": "url('/assets/images/bg_footer.jpg')",
      },
    },
  },
  plugins: [],
};
