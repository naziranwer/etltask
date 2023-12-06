// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-5": "#f5f5f5",
        "gray-888888-50l": "#888",
        "gray-c3c3c3-75l": "#c3c3c3",
        "gray-595959-30l": "#595959",
        white: "#fff",
        "gray-50": "rgba(52, 52, 52, 0.5)",
        "gray-c5c5c5-75l": "#c5c5c5",
        "gray-8a8a8a-50l": "#8a8a8a",
        "gray-414141-20l": "#414141",
        "blue-15": "rgba(26, 143, 230, 0.15)",
        "gray-15": "#d8d8d8",
        "blue-100": "#1a8fe6",
        "gray-30": "rgba(52, 52, 52, 0.3)",
        "gray-black": "#000",
        "gray-70": "rgba(52, 52, 52, 0.7)",
        "gray-100": "rgba(52, 52, 52, 0.9)",
        "blue-30": "rgba(26, 143, 230, 0.3)",
        "blue-background": "#f5f8fa",
        silver: "#c4c4c4",
        transparent: "rgba(255, 255, 255, 0)",
      },
      spacing: {},
      fontFamily: {
        caption: "Roboto",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
