require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        app: "./assets/app.js",
    },

    output: {
        path: path.resolve(__dirname, "public/builds/js"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            url: true,
                            sourceMap: true,
                        }
                    },
                ],
            },
            {
                test: /\.js$/i,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },

    plugins: [].concat([new MiniCssExtractPlugin({
        filename: "../css/[name].css"
    })])
};