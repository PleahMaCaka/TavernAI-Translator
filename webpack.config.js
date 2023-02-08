const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: "cheap-module-source-map",
    mode: process.env.MODE || "development",
    experiments: {
        topLevelAwait: true
    },
    // fallback true
    entry: {
        popup: "./src/popup/popup.ts",
        background: "./src/background/background.ts",
        content: "./src/content/content.ts",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: { url: require.resolve("url/") }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "manifest.json" },
                { from: "assets", to: "assets" },
                { from: "src/popup.html", to: "popup.html" },
            ]
        })
    ]
}