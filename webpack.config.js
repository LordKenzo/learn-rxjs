const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        },
        exclude: /node_modules/
      }
    ]
  }
};
