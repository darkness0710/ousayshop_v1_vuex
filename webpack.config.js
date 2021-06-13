module: {
  rules: [
    {
      test: /\.(ttf|cur|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }
  ]
}
