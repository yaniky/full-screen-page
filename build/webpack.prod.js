const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.js",
    module: {},
    plugins: [],
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "umd",
        library: "FullScreenPage"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_debugger: true,
                        drop_console: true
                    }
                },
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
});