/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        90: "90%",
      },
      padding: {
        unset: "unset",
      },
      backgroundSize: {
        100: "100% 100%",
      },
      colors: {
        home: "#F1F7ED",
        textBlue: "#481AFF",
        greyText: "#595B60",
      },
      fontFamily: {
        Rubik: "Rubik",
      },
      fontSize: {
        24: "24px",
        48: "48px",
        16: "16px",
        14: "14px",
      },
    },
  },
  plugins: [],
};
