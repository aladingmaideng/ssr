const path = require('path');
const webpack = require('webpack');
module.exports = {
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
  ],
};
