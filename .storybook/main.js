const WindiCSSWebpackPlugin = require("windicss-webpack-plugin")
const Icons = require('unplugin-icons/webpack')

module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "webpack5"
  },
  "webpackFinal": async (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    config.plugins.push(Icons({ compiler: 'vue3' }))

    return config
  }
}
