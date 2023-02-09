const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const base = require('./base');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
    mode: 'development',
    entry: './src/main.tsx',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        clean: true,
        filename: '[name].js?[contenthash]',
        publicPath: '/'
    },
    plugins: [
        new HtmlPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true
    }
});
