const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const entry = {
    modules: [
        "bootstrap",
        "dotenv",
        "dotenv-webpack",
        "fetch-mock",
        "md5",
        "prop-types",
        "react",
        "react-dom",
        "react-redux",
        "react-router-dom",
        "react-test-renderer",
        "redux",
        "redux-thunk",
        "sweetalert2",
    ]
};

const output = {
    publicPath: '/',
    library: "[name]",
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
};

const plugins = [
    new webpack.DllPlugin({
        name: "[name]",
        path: path.join(__dirname, "[name].manifest.json")
    })
];

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

module.exports = {
    entry,
    output,
    plugins,
    module: modules
};
