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
        grey500: "#E7E9EF",
        red500: "#EE2543",
      },
      fontFamily: {
        Rubik: "Rubik",
      },
      fontSize: {
        24: "24px",
        22: "22px",
        48: "48px",
        43: "43px",
        34: "34px",
        16: "16px",
        14: "14px",
      },
    },
  },
  plugins: [],
};
