const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/docs',
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(js?|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: { ie: "11" } }],
              ["@babel/preset-react", { pragma: "h" }],
            ],
          },
        },
      },
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
};
