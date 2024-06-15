
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#f7f3e8",
        white: "#fff",
        saddlebrown: "#632e04",
        darkslategray: {
          "100": "#353535",
          "200": "rgba(53, 53, 53, 0.5)",
        },
        dimgray: "#747474",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        poppins: "Poppins",
      },
    },
    fontSize: {
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};



