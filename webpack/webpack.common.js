const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const port = process.env.PORT || 8080;

// absolute path of the root directory of the project
const rootDir = path.resolve(__dirname, '..');

console.log(path.resolve(rootDir, 'build'));

// absolute path of global stylesheet
const globalStyleSheetPath = path.resolve(rootDir, 'src/styles/index.scss');

module.exports = {
  // resolve all entry paths and loaders from the root directory of the project
  // also serves as root when resolving import paths of modules
  entry: path.resolve(rootDir, 'src/index.tsx'),
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
            loader: 'style-loader',
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
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(rootDir, 'src/styles/index.scss'),
            },
          },
        ],
      },
      // this scss rule applies only to the global style sheet
      // css modules is not applied in this rule
      {
        test: /\.s[ac]ss$/,
        include: [globalStyleSheetPath],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
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
          // loads all the variables in the globalStyleSheet globally
          // so they can be used in any sass module
          {
            loader: 'sass-resources-loader',
            options: {
              resources: globalStyleSheetPath,
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
            loader: '@svgr/webpack',
            options: {
              jsx: true,
            },
          },
        ],
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
    host: '0.0.0.0',
    port: port,
    historyApiFallback: true,
  },
};
