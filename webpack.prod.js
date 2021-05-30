const path = require('path');
const common = require('./webpack.common');//gives the content of common
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.s?css$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader ,
    //                 'css-loader', 
    //                 'sass-loader'
    //             ]
    //         }
    //     ]
    // }
    plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: '[name].[contenthash].css'
    //     }),  
        new CleanWebpackPlugin()
    ]
});
