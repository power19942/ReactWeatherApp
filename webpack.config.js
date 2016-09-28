module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
       /* root: __dirname,
        alias:{
          Greeter: 'public/components/Greeter.jsx',
          GreeterMessage: 'public/components/Message.jsx',
          GreeterForm: 'public/components/Form.jsx'
        },*/
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[{
            loader: 'babel-loader',
            query:{
                presets: ['react','es2015','stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: 'eval-source-map'
};
