const path = require('path');
const webpack = require('webpack');


const entry = {
    modules: [
        "md5",
        "react",
        "react-dom",
        "react-redux",
        "react-router-dom",
        "redux",
        "redux-thunk",
        "sweetalert2",
    ]
};

const output = {
    publicPath: '/fronted-developer-test',
    library: "[name]",
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
};

const plugins = [
    new webpack.DllPlugin({
        context: __dirname,
        name: "[name]_[hash]",
        path: path.join(__dirname, "manifest.json")
    })
];

module.exports = {
    entry,
    output,
    plugins,
};
