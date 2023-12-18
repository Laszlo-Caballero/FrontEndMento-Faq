/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Desktop: "url('./src/assets/images/background-pattern-desktop.svg')",
        Mobile: "url('./src/assets/images/background-pattern-mobile.svg')",
      },
      fontFamily: {
        WorkSans: ["WorkSans"],
        WorkSansBlod: ["WorkSansBlod"],
        WorkSansSemiBlod: ["WorkSansSemiBlod"],
      },
      content: {
        Open: 'url("./src/assets/images/icon-plus.svg")',
        Close: 'url("./src/assets/images/icon-minus.svg")',
      },
      screens: {
        Mobile: "375px",
      },
    },
  },
  plugins: [],
};
