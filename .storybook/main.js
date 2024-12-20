/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */

const config = {
  stories: [
    "../stories/**/Welcome.mdx",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: [{ from: '../static', to: '/static' }],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  }
};
export default config;

