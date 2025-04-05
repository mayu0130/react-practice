const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.tsx",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js"
  },
  devServer:{
    static: {
      directory: "./dist"
    },
  },
  module: {
    rules: [
      {
        //拡張子cssファイル（正規表現）
        test: /\.css$/,
        //use配列のローダーは配列の最後尾から順に適用される。よってcss-loader → style-loaderの順となる。
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //拡張子tsファイル（正規表現）
        test: /\.tsx$/,
        //TypeScriptをコンパイルする
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //テンプレートに使用するhtmlファイルを指定
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    //拡張子を配列で指定
    extensions: [
      ".tsx", ".ts", ".js",
    ],
  }
};