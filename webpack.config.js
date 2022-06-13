const HtmlWebpackPlugin          = require('html-webpack-plugin');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CopyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src", to: "dest" },
      ],
    }),
  ],
  mode: process.env.NODE_ENV,
  entry: './src/js/index.js',
  output: {
    publicPath: '/',
    filename: env === 'development' ? 'js/bundle.js' : 'js/bundle.[contenthash].min.js',
    chunkFilename: env === 'development' ? 'js/[name].js' : 'js/[name].[contenthash].min.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: 'src/img/[name].[ext]',
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { implementation: require('sass'), sourceMap: true } },
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]!static'
      }
    ],
  },

  plugins: [
    //new WebpackBuildNotifierPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].min.css'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),
  ],
}