
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path');
const basePath = __dirname;

const { merge } = require('webpack-merge');

module.exports = merge(
    {},
    {
        context: path.join(basePath, 'src'),
        resolve: {
            extensions: ['.js', '.ts', '.tsx']
        },
        entry: {
            app: './index.tsx',
            appStyles: ['./myStyles.scss'],
            vendorStyles: ['../node_modules/bootstrap/dist/css/bootstrap.css']
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(process.cwd(), 'dist'),
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.(png|jpg)$/,
                    type: "asset/resource"
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                import: false,
                                modules: {
                                    exportLocalsConvention: "camelCase",
                                    localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                    localIdentContext: path.resolve(__dirname, "src"),
                                    localIdentHashPrefix: "my-custom-hash"
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass")
                            }
                        }
                    ]
                }

            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html'
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].[chunkhash].css",
                chunkFilename: "[id].css"
            }),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                  // Lossless optimization with custom option
                  // Feel free to experiment with options for better result for you
                  plugins: [
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }]
                  ],
                },
              })
        ]
    }
)