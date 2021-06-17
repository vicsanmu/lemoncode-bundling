const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: "production",
    devServer: {
        port: 8081,
        stats: "verbose"
    },
    stats: "verbose",
    plugins: [
        new Dotenv({
            path: "./prod.env"
        })
    ]
})