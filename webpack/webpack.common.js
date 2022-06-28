const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    new FaviconsWebpackPlugin({
      logo: path.resolve(rootDir, 'src/assets/icons/bjm.svg'),
      prefix: 'static/assets/',
      favicons: {
        background: '#0b3948',
        theme_color: '#0b3948',
      },
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'json' }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: port,
    historyApiFallback: true,
  },
};
