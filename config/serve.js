const path = require('path');
const base = require('./base');
const nodeExternals = require('webpack-node-externals');

const { merge } = require('webpack-merge');
module.exports = merge(base, {
  mode: 'production',
  target: 'node',
  entry: path.resolve(__dirname, '../serve/index.js'),
  output: {
    filename: 'serve.js',
  },
  externals: nodeExternals(),
});
