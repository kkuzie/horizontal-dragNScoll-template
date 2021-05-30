const path = require('path');
const common = require('./webpack.common');//gives the content of common
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    devtool: 'source-map',
    // false, //USED to remove EVAL from main.bundle.js
    output: {
        filename: '[name].bundle.js',//no hash since in dev mode so no cache problems
        // filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
});
