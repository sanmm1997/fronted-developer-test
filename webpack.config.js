const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entry = {
    app: './src/index.js',
};

const output = {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
};

const modules = {
    rules: [{
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
    }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
        resolve: { extensions: ['.js', '.jsx'] },
    }, {
        test: /\.(scss|css)$/,
        use: [
            {loader: MiniCssExtractPlugin.loader},
            'css-loader',
            'sass-loader'
        ],
    }, {
        test: /\.(jpg|png|gift|woff|eot|ttf|svg|mp4|webm)$/,
        use: {
            loader: 'url-loader',
            options: { limit: 900000, name: 'assets/[hash].[ext]' },
        },
    }]
};

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/redux_icon.ico',
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
        path: path.resolve(__dirname, 'dist'),
        filename: 'css/[name].css'
    }),
    new CopyPlugin([
        { from: './public/.htaccess', to: path.resolve(__dirname, 'dist') },
    ]),
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifest.json'),
        scope: 'xyz',
        sourceType: 'commonjs2'
    }),
];

module.exports = {
    entry,
    output,
    plugins,
    module: modules,
};
