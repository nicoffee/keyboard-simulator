const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
