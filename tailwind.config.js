// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
  },
  theme: {
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
        mygred:
          " linear-gradient(90deg, rgba(65,255,211,1) 0%, rgba(54,174,241,1) 100%)",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },

  variants: {},
  plugins: [],
};
