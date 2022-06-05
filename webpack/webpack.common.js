const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { default: postcss } = require('postcss');

const port = process.env.PORT || 8080;

//abolute path of the root directory of the project
const rootDir = path.resolve(__dirname, '..');

module.exports = {
  // resolve all entry paths and loaders from the root directory of the project
  // also serves as root when resolving import paths of modules
  entry: path.resolve(rootDir, 'src/index.tsx'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    // so no need to type in extensions for these files when importing
    extensions: ['.tsx', '.ts', '.js'],
    modules: [rootDir, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(rootDir, 'babel.config.json'),
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(rootDir, 'tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              exportLocalsConvention: 'camelCaseOnly',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      minSize: 0,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
    }),
    require('autoprefixer'),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
  },
};
