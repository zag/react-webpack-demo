
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src/');
var DEV = process.env.DEV || 'false';

var config = {
    entry: "./entry.js",
    output: {
            path: BUILD_DIR,
            filename: "bundle.js"
    },
    module: {
        loaders: [
            //{test: /\.css$/, loader: "style!css"},
            { test: /\.css$/, loader: "style-loader!css-loader" },
             {test : /\.jsx?/,
             include : APP_DIR,
             loader : 'babel'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
};

module.exports = config;
