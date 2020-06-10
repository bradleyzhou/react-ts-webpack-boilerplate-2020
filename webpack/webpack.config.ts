import * as path from 'path';
import * as webpack from 'webpack';

import HtmlWebPackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const srcDir = path.resolve('src');
export const outDir = path.resolve('build');

const config: webpack.Configuration = {
  context: srcDir,
  entry: {
    app: `index`,
  },
  output: {
    filename: '[name].[hash:8].js',
    path: outDir,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.json'],
    modules: [srcDir, 'node_modules'],
    alias: {
      '@': srcDir,
    },
    symlinks: false,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/react'],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            // This is for tree shaking lodash, dealing with imports, etc.
            // see .babelrc for more info
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.json\??.*$/,
        type: 'javascript/auto',
        loader: 'url-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|gif|jpeg|jpg)\??.*$/,
        loader: 'url-loader',
        query: {
          limit: 20000,
          fallback: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[contenthash:8].[ext]',
            },
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
    cached: true,
  },
  performance: { hints: false },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/**/*',
          globOptions: {
            ignore: ['**/*.html', '**/font/**/*.*'],
          },
        },
      ],
    }),
    new HtmlWebPackPlugin({
      template: `assets/index.tmpl.html`,
      filename: 'index.html',
      templateParameters: {
        assets_path: 'assets',
      },
    }),
    new CleanWebpackPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};

export default config;
