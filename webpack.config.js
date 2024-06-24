const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {   
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },   
    mode: "development",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {       
        port: 9000,  
        host: "localhost",     
        historyApiFallback: true,
        // respond to 404s with index.html
    
        hot: true
        // enable HMR on the server 
    },
    plugins: [new MiniCssExtractPlugin()],
};