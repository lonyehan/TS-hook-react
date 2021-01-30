const path = require("path");

module.exports = {
    entry: path.join(__dirname, "../src/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                use: [{
                    loader: "ts-loader",
                }, ],
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(scss|sass)/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "stylus-loader",
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
};