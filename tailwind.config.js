/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [["@babel/plugin-transform-react-jsx", { throwIfNamespace: false }]],
};
