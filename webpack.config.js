const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },

      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.modules\.\w+$/i,
              },
            }
          },
          'sass-loader'
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],

  devServer: {
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },

  devtool: 'source-map',

};
