var path = require('path'),
    clientPath = path.join(__dirname, 'client'),
    distPath = path.join(__dirname, 'dist'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': path.join(clientPath, 'index.ts'),
        'vendors': path.join(clientPath, 'vendors.ts'),
        'style': path.join(clientPath, 'index.scss')
    },
    output: {
        path: distPath,
        filename: '[name]-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.scss$/,
            loader: "style!css!sass"
        }],
        noParse: [/angular2\/bundles\/.+/],
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html', '.scss', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.join(clientPath, 'index.html')
      })
    ]
};
