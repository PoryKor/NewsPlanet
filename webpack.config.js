const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "/public"),
        filename: "bundle.[contenthash].js",
        publicPath: "/",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            {
                test: /\.(ts|tsx)?$/,
                use: {
                  loader: 'awesome-typescript-loader'
                },
                exclude: /node_modules/
             },
            { test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              },
            {
                test: /\.(png|jpg|svg)$/i,
                loader: "file-loader",
            },
        ],
    },
    plugins: [
        //Allows update react components in real time
        new HotModuleReplacementPlugin(),
        //Allows to create an index.html in our build folder
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: "./index.html", //we put the file that we created in public folder
        }),
        //This get all our css and put in a unique file
    ],
    //Config for webpack-dev-server module
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8000,
    },
};