const plugin = require("tailwindcss/plugin");

/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */

/** @type { DefaultConfig & { theme: { extend: DefaultTheme } } } */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".tag": {},
      });
    }),
  ],
};
