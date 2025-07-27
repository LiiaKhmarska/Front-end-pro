import path, { resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (_, argv) => {
  const mode = process.env.MODE || argv.mode || "development";
  const isDev = mode === "development";
  return {
    mode,
    entry: path.resolve(__dirname, "src/app.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
    },

    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      port: 9000,
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-modules-umd",
              ],
            },
          },
        },

        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\\.(png|jpe?g|gif|svg)$/, // Збірка для зображень
          exclude: /node_modules/,
          type: "asset",
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "src/images",
              },
            },
            "image-webpack-loader",
          ],
        },
      ],
    },
    optimization: {
      chunkIds: "named",
      splitChunks: {
        chunks: "all",
      },
      minimizer: [
        "...",
        new ImageMinimizerPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                ["svgo", { name: "preset-default" }],
              ],
            },
          },
          loader: false,
        }),
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack slider",
        scriptoading: "defer",
        minify: !isDev,
        template: path.resolve(__dirname, "src/view/index.html"),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: resolve(__dirname, "src/images"),
            to: resolve(__dirname, "dist/images"),
          },
        ],
      }),
    ],
  };
};
