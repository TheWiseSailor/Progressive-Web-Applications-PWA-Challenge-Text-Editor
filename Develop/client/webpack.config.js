const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      // TODO: Configure HtmlWebpackPlugin to generate HTML files
      new HtmlWebpackPlugin({
        template: "./src/index.html", // Specify the template file
        filename: "index.html", // Output filename
        chunks: ["main"], // Include the "main" entry chunk
      }),

      new HtmlWebpackPlugin({
        template: "./src/install.html", // Specify the template file
        filename: "install.html", // Output filename
        chunks: ["install"], // Include the "install" entry chunk
      }),

      // TODO: Configure WebpackPwaManifest to generate a Web App Manifest
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: "JATE",
        description: "A simple text editor as a Progressive Web App",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            purpose: "any maskable",
          },
        ],
      }),

      // TODO: Configure InjectManifest to add your service worker
      new InjectManifest({
        swSrc: "./src-sw.js", // Specify the service worker source file
      }),
    ],

    module: {
      rules: [
        // TODO: Configure CSS loaders for processing CSS files
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },

        // TODO: Configure Babel loader for JavaScript files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
