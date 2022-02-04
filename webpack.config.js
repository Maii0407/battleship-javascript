const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     mode: 'development',
   entry: {
     index: './src/index.js',
     style: './src/style.css',
     factoryLogic: './src/factoryLogic/factoryLogic.js',
     playerLogic: './src/playerLogic/playerLogic.js',
     appUI: './src/appUI.js',
     appComponents: './src/appComponents.js',
     appEvents: './src/appEvents.js',
     appFormFunc: './src/appFormFunc.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BATTLESHIP',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };