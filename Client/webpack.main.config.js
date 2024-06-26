/* eslint-disable */
const path = require("path");

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/main.js",
  // Put your normal webpack config below here
  module: {
    rules: require("./webpack.rules"),
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"), // diretório de saída dos arquivos gerados pelo webpack
    hot: true, // habilita o hot reload
  },
};
