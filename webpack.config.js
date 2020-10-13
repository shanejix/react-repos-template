const path = require("path");
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
      // 处理less资源
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      // 处理css资源
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      //  处理js和jsx 文件
      {
        test: /\.jsx?/,
        include: [
          // 指定哪些路径下的文件需要经过 loader 处理
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'babel-loader', // 指定使用的 loader
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
    // 开发服务器启动路径
    contentBase: path.resolve(__dirname, "dist"),
  },
};
