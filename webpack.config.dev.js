const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
    app: path.resolve(__dirname, 'src/index.js'),
};

const output = {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
};

const devServer = {
    hot: true,
    port: 8000,
    open: true,
    lazy: false,
};

const module = {
    rules: [{
        test: /\.html$/,
        use: ['html-loader'],
    }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
        resolve: { extensions: ['.js', '.jsx'] },
    }, {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
        test: /\.(jpg|png|gift|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
            loader: 'url-loader',
            options: { limit: 900000, name: 'assets/[hash].[ext]' },
        },
    }]
};

module.exports = {
    entry,
    output,
    module,
    devServer,
};