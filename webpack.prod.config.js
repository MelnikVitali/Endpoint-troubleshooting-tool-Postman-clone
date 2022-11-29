const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const moduleRules = require('./build-configurations/module-rules');
const optimization = require('./build-configurations/optimization');
const commonPlugins = require('./build-configurations/common-plugins');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    mode: 'production',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            ...moduleRules
        ],
    },
    plugins: [
        ...commonPlugins,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
    ],
    optimization: {
        ...optimization
    },
};
