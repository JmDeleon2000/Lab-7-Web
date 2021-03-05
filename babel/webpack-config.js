const path = require("path");
var htmlWepackPlugin = require('html-webpack-plugin');
module.exports
= {
   
    entry: "./src/index.js",
    output: 
    {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new htmlWepackPlugin(
        {
            template: "./src/index.html"
        })],
    module:{
        rules:
        [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test:/\.(png|jpg)$/,
                use:
                {
                    loader: "file-loader",
                    options: 
                    {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-transform-arrow-functions']
                    }
            }
        }
        ]
    }
}