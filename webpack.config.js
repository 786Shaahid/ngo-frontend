import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IS_PROD_ENV = process.env.NODE_ENV === 'production';

const config = {
  mode: IS_PROD_ENV ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // Asset Rule for Images and Videos
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|m4a|aac|flac)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/media/[name].[hash][ext]',
        },
      },
      {
        // Fonts & Icons
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
      },
    ],
  },
  devServer: {
    static: { directory: path.resolve(__dirname, 'public') },
    compress: true,
    port: 2003,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    client: {
      webSocketURL: {
        hostname: '0.0.0.0',
      },
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
    extensions: [
      '.js', '.jsx', '.json',
      '.png', '.jpg', '.jpeg',
      '.mp4', '.webm', '.svg',
      '.woff', '.ttf',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};

if (!IS_PROD_ENV) {
  config.devtool = 'eval-cheap-module-source-map';
}

export default config;