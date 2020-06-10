import * as path from 'path';
import * as webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig, { outDir } from './webpack.config';

const config: webpack.Configuration = merge(baseConfig, {
  devServer: {
    contentBase: outDir,
    port: 9000,
    historyApiFallback: true,
  },
});

export default config;
