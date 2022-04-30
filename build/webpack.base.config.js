const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: resolve("../dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false, // 关闭webpack的箭头函数，可选
        },
    },
    resolve: {
        alias: {
            '@': resolve("../src"),
            '@test': resolve("../test"),
        },
        extensions: [".js", ".ts"],
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./tpl/index.html",
        }),
    ],
};
