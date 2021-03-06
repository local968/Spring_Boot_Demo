const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './index.jsx',
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../main/resources/public'),
        // publicPath: '/imgs/' // 生成html里的引用路径
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', "stage-1", 'react']
                    }
                }]
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {modules: true}}
                ]
            }, {
                test: /(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            config: __dirname + "/data.js",
            component: __dirname + "/component",
            imgs: __dirname + "/imgs",
            css: __dirname + "/css",
            service: __dirname + "/service"
        }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        quiet: true,
        port: 8080,
        open: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons', filename: 'common.js'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index1.html',
            template: './index.html'
        }),
        new ExtractTextPlugin({filename: '[name].css', allChunks: true})
        ,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:8090'
        // })

    ],
    // externals:{
    //     data:'data',
    //     aaa:'aaa'
    // }
};