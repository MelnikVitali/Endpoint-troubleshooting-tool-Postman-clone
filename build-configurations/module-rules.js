module.exports = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
    },
    {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],

    },
    {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
    },
    {
    	test: /\.(png|gif|jpg|ico)$/,
        loader: 'url-loader',
    },
    {
        test: /\*.wav/,
        loader: 'file-loader',
        type: 'asset/resource',
    }
];
