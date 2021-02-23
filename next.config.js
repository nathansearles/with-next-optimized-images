const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["jpeg", "png", "webp", "gif"],
      optimizeImages: true,
      optimizeImagesInDev: true,
      defaultImageLoader: "responsive-loader",
      responsive: {
        test: /\.(jpe?g|png|webp)$/i,
        adapter: require("responsive-loader/sharp"),
        sizes: [512, 720, 1024, 1280, 1440, 1680, 2560],
      },
    },
  ],
]);
