const path = require("path");

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "app.processed.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
