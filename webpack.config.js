const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/player.ts',
    output: {
        filename: 'YMPlayer.js',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true,
        libraryTarget:'umd',
        libraryExport: 'default',
        library:'YMPlayer'
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: "awesome-typescript-loader"
        }]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    }
};