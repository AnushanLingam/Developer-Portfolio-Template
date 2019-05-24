const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0',
        port: 5000,
        historyApiFallback: {
            index: 'index.html'
        }

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};