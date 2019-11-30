const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: __dirname + "/public/index.html",
            filename: "index.html",
            favicon: "./public/favicon.ico",
            inject: 'body'
        })
    ],
    module: {  // where we defined file patterns and their loaders
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(jpg|png|jpe?g|svg)$/i,
                use: ['file-loader'],
            }
        ]
    },
};