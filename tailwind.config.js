/** @type {import('tailwindcss').Config} */

// Colors are from lighter to darker
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "page-gradient": "linear-gradient(180deg, #503000 0%, #000000 58.85%)"
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        title: ["var(--font-poppins)"]
      },
      colors: {
        primary: {
          400: "#FFD390",
          600: "#FF9900"
        },
        white: {
          600: "#FFFFFF"
        },
        grey: {
          600: "#6F6F6F"
        },
        black: {
          600: "#000000"
        }
      }
    }
  },
  plugins: []
};
