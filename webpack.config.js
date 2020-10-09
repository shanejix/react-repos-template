const path = require("path");
// https://www.npmjs.com/package/mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// https://www.npmjs.com/package/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 指定构建模式
  mode: "development",

  // 指定构建入口文件
  entry: "./src/index.js",

  output: {
    // 指定构建生成文件所在路径
    path: path.resolve(__dirname, "dist"),
    // 指定构建生成的文件名
    filename: "bundle.js",
  },

  module: {
    rules: [
      // 处理js|jsx资源
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // 处理less资源
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      // 处理css资源
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[id].style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
    // 开发服务器启动路径
    contentBase: path.resolve(__dirname, "dist"),
  },
};
