const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    devtool: 'cheap-eval-source-map',
    devServer: {
        compress: true,
        historyApiFallback: true,
        port: 8080,
        stats: 'minimal',
    },
});
