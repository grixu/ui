const WindiCSS = require("vite-plugin-windicss").default
const Icons = require('unplugin-icons/vite')

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
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config) {
    config.plugins.push(Icons({ compiler: 'vue3' }))
    config.plugins.push(WindiCSS())
    return config
  },
}
