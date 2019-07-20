const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    entry: "./src/index-dev.js",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "../dist"
    },
    output: {
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
});