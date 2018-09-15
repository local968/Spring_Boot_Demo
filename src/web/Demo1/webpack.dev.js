var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: path.resolve(__dirname, './index.jsx'),
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../sources/public'),
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
            css: __dirname + "/css"
        }
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
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:8090'
        // })

    ]
};

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    quiet: true,
    port: 8080,
    open: true
});

