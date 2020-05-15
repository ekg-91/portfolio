const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const outputDir = '/public';

module.exports = {
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
           loader: `postcss-loader`,
           options: {
             options: {},
             plugins: () => {
               autoprefixer({ browsers: [ 'last 2 versions' ] });
             }
           }
         }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
           loader: `postcss-loader`,
           options: {
             options: {},
             plugins: () => {
               autoprefixer({ browsers: [ 'last 2 versions' ] });
             }
           }
         },
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
    path: __dirname + outputDir,
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
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ],
  devServer: {
    contentBase: '.' + outputDir,
    hot: true,
    port: 3000
  }
};
