const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 8081,
        stats: "errors-only",
    },
    plugins: [
        new Dotenv({
            path: "./dev.env"
        })
    ]
})