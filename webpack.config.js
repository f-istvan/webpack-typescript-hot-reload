module.exports = {
    entry: './main.ts',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
            { test: /.ts$/, loader: 'awesome-typescript-loader' }
        ]
    }
};
