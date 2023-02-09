const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
        alias: {
            '@': path.resolve('src')
        }
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
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false //不将注释提取到单独的文件中
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: process.env.NODE_ENV
        }),
        new ProgressBarPlugin()
    ]
};
