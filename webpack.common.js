const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/app.js'),
        vendor: path.resolve(__dirname, './src/vendor.js')
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        port: 3006,
        open: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            inject: 'body',//where to put js files
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/i,
                // type: 'asset/resource',
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]'
                        // outputPath: 'images'
                    }
                }
            }
        ]
    }
};
