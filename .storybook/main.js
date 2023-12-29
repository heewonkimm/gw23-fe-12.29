/** @type { import('@storybook/nextjs').StorybookConfig } */

const config = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-designs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Overview',
  },
  staticDirs: ['../public'],
};

export default config;
