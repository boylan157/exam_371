const path = require('path');

module.exports = {
    entry: './src/client/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        alias: {
            'react-router-dom': path.resolve('./node_modules/react-router-dom')
        },
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './public'
    }
};