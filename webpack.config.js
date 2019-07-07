var webpack = require("webpack");
const path = require('path');

// Set the source path
var SRC_DIR = path.resolve(__dirname, "src");

var DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'index.pack.js',
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: ["@babel/plugin-transform-arrow-functions", "@babel/plugin-proposal-class-properties"]
                        
                    }
                }
            }
        ]
    }
}