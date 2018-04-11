const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: 'style.css',
  disable: process.env.NODE_ENV === 'development',
});
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./src'],
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'public/build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
  mode: 'development', // change to production when not in development and vice versa
  module: {
    rules: [
      {
        test: /(\.scss)$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ],
          fallback: 'style-loader', // use style-loader in development mode
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    extractSass,
  ],
};
