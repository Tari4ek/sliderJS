const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./styles/styles.scss',
            './JS/main.js',
            './JS/jquery.slider.js'
    ],
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css')
    ]
};