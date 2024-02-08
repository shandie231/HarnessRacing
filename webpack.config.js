const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  
  entry: [
    // Entry point of app
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js',
  },
  devtool:'eval-source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'build'),
    },
    host: '0.0.0.0',
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api/**':{
        target: `http://localhost:3000`,
        secure: false,
      },
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      }
    },
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
      test: /.(css|scss)$/,
      use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]},
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.gif', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      favicon: path.resolve(__dirname, './client/assets/geodude.ico')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};