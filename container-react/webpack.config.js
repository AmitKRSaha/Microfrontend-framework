const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        //   }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

        new FederationPlugin({
            // name: 'childReact',
            // filename: 'remoteEntry.js',
            // exposes:{
            //     './reactApp': './src/bootstrap'
            // },
            shared: ["react", "react-dom"],

            name: "container",
            remotes:{
                "childVue": "childVue@http://localhost:8081/remoteEntry.js",
                "childReact": "childReact@http://localhost:8082/remoteEntry.js"
            }
        })
    ]
}