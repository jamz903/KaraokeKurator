/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      primary: {
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
    },
    extend: {
      backgroundImage: {
        "page-gradient": "linear-gradient(180deg, #503000 0%, #000000 58.85%)"
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "var(--font-poppins)"]
      }
    }
  },
  plugins: []
};
