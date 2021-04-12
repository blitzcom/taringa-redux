const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]--[hash:base64:5]',
          },
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [path.join(__dirname, '../src/sass')],
          },
          additionalData: `
            $production: false;
          `,
        },
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '..', 'src'),
    };

    return config;
  },
};
