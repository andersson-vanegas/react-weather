const HtmlWebackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devmode = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: [
        '@babel/polyfill',
        './src/app/index.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
// el babel-loader  es un modulo que le permite trabajar a webpack con otros modulos webpack 
                loader: 'babel-loader' 
            },
            {
                    // expersion irregular
                    test: /\.css/,
                    use: [
                        devmode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
            }
        ]
    },
    plugins:[
        new HtmlWebackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: 'bundle.css'
        })
    ]
};
