/**
 *
 * Created by Gabriel Mayta
 *
 */

var Webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./app/bootstrap/index.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('css!sass'),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|eot|woff|ttf|svg|json)$/,
                loader: "file-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules", "app"],
        alias: {
            "angular": "angular/angular.js",
            "angular-ui-router": "angular-ui-router/release/angular-ui-router.js",
            "oclazyload": "oclazyload/dist/oclazyload.js",
            "lodash": "lodash",
            "swiper": "swiper/dist/js/swiper.js"
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new Webpack.ProvidePlugin({
            _: 'lodash',
            Swiper: "swiper"
        })
    ]
};