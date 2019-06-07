const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

const getLoadModeConfig = (env) =>
    require(`./build-utils/${env.mode}.config`)(env);

module.exports = (env) =>
    webpackMerge(
        {
            mode: env.mode,
            context: path.resolve(__dirname, 'src'),
            entry: {
                index: './js/index.js',
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].bandle.js',
            },
            optimization: {
                splitChunks: {
                    chunks: 'all',
                },
            },
            module: {
                rules: [
                    {
                        test: /\.(png|jpe?g|gif)$/i,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    name: '[path]/[name].[ext]',
                                    limit: 8192,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: ['babel-loader'],
                    },
                    {
                        test: /\.hbs$/,
                        use: 'handlebars-loader',
                    },
                ],
            },
            plugins: [new CleanWebpackPlugin(), new WebpackBar()],
        },
        getLoadModeConfig(env)
    );
// 'style-loader', css loader [0]
