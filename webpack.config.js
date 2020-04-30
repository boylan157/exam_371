const path = require('path');

// code extended from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-09/webpack.config.js
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