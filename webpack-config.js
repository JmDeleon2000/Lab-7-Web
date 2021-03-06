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
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-transform-arrow-functions', 
                      '@babel/plugin-transform-block-scoped-functions',
                    'transform-class-properties']
                    }
            }
        },
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
            }
           
        ]
    }
}