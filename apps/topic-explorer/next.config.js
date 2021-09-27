/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nrwl/next/plugins/with-nx');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  /**
   * Custom Webpack Config
   * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
   */
  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  },
};

module.exports = withNx(nextConfig);
