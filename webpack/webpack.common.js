const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { rootDir } = require('./constants.js');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// absolute path of global stylesheet which applies all the global css styling, mostly the Bootstrap styles
const globalStyleSheetPath = path.resolve(rootDir, 'src/styles/index.scss');

/**
 * Contains all the common webpack settings for both client and server side bundling.
 * Mostly this consists of loaders, which must match on both client and server side bundling,
 * so that loaded resources can be accessed properly.
 */
module.exports = {
  // Each page of application forms a new entry point.
  entry: {
    home: path.resolve(rootDir, 'src/pages/home/index.tsx'),
    knowledge: path.resolve(rootDir, 'src/pages/knowledge/index.tsx'),
    experience: path.resolve(rootDir, 'src/pages/experience/index.tsx'),
  },
  // resolve all entry paths and loaders from the root directory of the project
  // also serves as root when resolving import paths of modules
  context: rootDir,
  output: {
    path: path.resolve(rootDir, 'build'),
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
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(rootDir, 'babel.config.json'),
            },
          },
          {
            loader: path.resolve(rootDir, 'webpack/webpack-ssg-loader'),
            options: {
              // path of directory that contains all the pages
              pagesDir: path.resolve(rootDir, 'src/pages'),
              renderedHtmlFileDir: path.resolve(rootDir, 'renderedHtml'),
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
      // This scss loading rule applies to all styles except global stylesheet
      // this is because it applies css modules
      {
        test: /\.s[ac]ss$/i,
        exclude: [globalStyleSheetPath],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCaseOnly',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            // loads the global sass variables to that they can be used throughout all scss modules
            // without explicit imports
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(rootDir, 'src/styles/global/index.scss'),
            },
          },
        ],
      },
      // alternative loading of global scss file, no css modules implementied here,
      // so that the bootstrap css classes will apply to all css modules.
      {
        test: /\.s[ac]ss$/,
        include: [globalStyleSheetPath],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
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
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, //8kb default
          },
        },
      },
      {
        test: /\.pdf$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
          publicPath: 'static/',
          outputPath: 'static/',
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new ProgressBarPlugin()],
};
