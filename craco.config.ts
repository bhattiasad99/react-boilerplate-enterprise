const postcssConfig = require("./postcss.config");
const path = require(`path`);

const config = {
  style: {
    postcssOptions: postcssConfig,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@So_on": path.resolve(__dirname, "src/so_on"),
    },
  },
};

export default config;
