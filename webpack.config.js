var webpack = require("webpack");
const path = require('path');

var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: __dirname,
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
                        presets: ['@babel/preset-env','@babel/preset-react']
                        
                    }
                }
            }
        ]
    }
}