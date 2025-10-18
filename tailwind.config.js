module.exports = {
  // tell Tailwind (and the VS Code extension) where to scan for class names
  content: [
    "./pages/**/*.{html,js}",
    "./**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}", // keep if you have a src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
