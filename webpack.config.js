const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  
  output: {
    path: path.join(__dirname, "/public"),
    filename: 'bundle-[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",   // определяем загрузчик
        options:{
            presets:[ "@babel/preset-env", "@babel/preset-react"],
            plugins: ['syntax-dynamic-import']   
        },
            
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },  
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]

};