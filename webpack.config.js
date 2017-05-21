var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require ('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: path.join(__dirname, 'src', 'main.ts'),
        // vendor: path.join(__dirname, 'src', 'vendor.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'stage-0']
                }
            },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('css-loader')
            // }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'app', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            inject: 'body'
        }),
    ]
};