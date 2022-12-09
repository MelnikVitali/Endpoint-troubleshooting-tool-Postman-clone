const path = require("path");

const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const moduleRules = require("./build-configurations/module-rules");
const optimization = require("./build-configurations/optimization");
const commonPlugins = require("./build-configurations/common-plugins");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js",
    },
    mode: "development",
    resolve: {modules: [path.resolve(__dirname, "src"), "node_modules"]},
    devServer: {
        historyApiFallback: true,
        // contentBase: path.join(__dirname, 'src'),
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    module: {
        rules: [
            ...moduleRules
        ],
    },
    plugins: [
        ...commonPlugins,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new webpack.SourceMapDevToolPlugin({}),
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        minimize: false,
        splitChunks: optimization.splitChunks,
    },
    devtool: false,
};
