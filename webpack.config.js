const path = require('path');


module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname,
        filename: 'index.pack.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                        
                    }
                }
            }
        ]
    }
}