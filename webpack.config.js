/**
 *
 * Created by Gabriel Mayta
 *
 */

var Webpack = require("webpack");

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
            "oclazyload": "oclazyload/dist/oclazyload.js"
        }
    }
};