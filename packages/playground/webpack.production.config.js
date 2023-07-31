const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env']],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '플레이그라운드',
      template: 'src/index.hbs',
      description: '웹팩과 모노레포를 학습하기 위한 프로젝트',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[contenthash].css',
    }),
  ],
};
