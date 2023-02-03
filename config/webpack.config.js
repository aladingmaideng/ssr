const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const base = require("./base");
const { merge } = require("webpack-merge");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = merge(base, {
  entry: "./src/main.tsx",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  output: {
    clean: true,
    filename: "[name].js?[contenthash]",
    publicPath: "/",
  },
  plugins: [
    new AssetsPlugin({
      entrypoints: true,
      integrity: true,
      prettyPrint: true,
      includeFilesWithoutChunk: true,
      includeAuxiliaryAssets: true,
      includeDynamicImportedAssets: true,
    }),
    // new HtmlPlugin({
    //   template: "./public/index.html",
    // }),
  ],
});
