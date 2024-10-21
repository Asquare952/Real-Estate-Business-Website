/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      white: { 200: "#FFFFFF" },
      purple: {
        200: "#703BF7",
        300: "#8254F8",
        400: "#946CF9",
        500: "#A685FA",
        600: "#DBCEFD",
        700: "#EDE7FE",
        800: "#F4F0FE",
        900: "#FBFAFF",
      },
      whiteShades: {
        500: "#E4E4E7",
        600: "#F1F1F3",
        700: "#F7F7F8",
        800: "#FCFCFD",
      },
      greyShades: {
        200: "#141414",
        300: "#1A1A1A",
        400: "#262626",
        500: "#333333",
        600: "#4D4D4D",
        700: "#666666",
        800: "#808080",
        900: "#999999",
      },
    },
    extend: {
      screens: {
        'sm': '200px',
        'sm-md': { min: '424px', max: '767px' },
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
