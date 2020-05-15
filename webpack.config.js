const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CopyPlugin = require('copy-webpack-plugin');
const outputDir = '/public';
const path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          parser: 'babel-eslint',
          baseConfig: {
            extends: ['semistandard-react']
          }
        }
      },
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'node_modules/ansi-styles'),
          path.resolve(__dirname, 'node_modules/react-hook-form'),
          path.resolve(__dirname, 'node_modules/debug'),
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
        },
      }      
    ]
  },
  output: {
    path: __dirname + outputDir, // eslint-disable-line no-path-concat
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: 'static', to: '' }]),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ],
  devServer: {
    contentBase: '.' + outputDir,
    hot: true,
    historyApiFallback: true,
    port: 3000
  }
};
