const path = require("path");
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
  src: path.resolve(process.cwd(), "src"),
  dist: path.resolve(process.cwd(), "dist")
};

module.exports = {
  // entry: {
  //   common: `${PATHS.src}/js/common`,
  //   index: `${PATHS.src}/js/index`
  // },
  output: {
    // path: `${PATHS.dist}`,
    filename: "js/index.js",
    // chunkFilename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
        {
            test: /\.vue$/,
            include: PATHS.src,
            loader: "vue-loader",
            options: {
                loader: {
                    scss: 'vue-style-loader!css-loader!sass-loader'
                }
            }

        },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader" ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/"
            }
          },
        ]
      }
    ]
  },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

    ],


};




