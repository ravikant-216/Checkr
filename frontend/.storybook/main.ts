import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
import webpackConfig from '../webpack.config'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    if (!config.resolve) config.resolve = {}
    config.resolve.alias = {
      ...config.resolve?.alias,
      ...webpackConfig.resolve.alias,
    }
    return config
  },
}
export default config
