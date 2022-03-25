const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         implementation: require("sass"),
      //         sassOptions: {
      //           fiber: false,
      //         },
      //       },
      //     },
      //   ],
      // }, 
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};