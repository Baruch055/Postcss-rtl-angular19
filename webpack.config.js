module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-rtl')
                                ]
                            }
                        }
                    },
                ]
            }
        ],
    }
}