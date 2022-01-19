const { createBanner, createConfig } = require("@grixu/rollup-config")
const pkg = require("./package.json")

const banner = createBanner(pkg)

const outputConfigs = {
  esm: {
    file: pkg.module,
    format: `es`,
  },
  cjs: {
    file: pkg.main,
    format: `cjs`,
  },
  browser: {
    file: pkg.browser,
    format: "umd",
    minify: true,
    css: true,
  },
  css: {
    file: pkg.style,
    minify: true,
  },
  dts: {
    file: pkg.types,
  },
}

const allFormats = Object.keys(outputConfigs)
const packageConfigs = allFormats.map(format => createConfig(format, outputConfigs[format], banner, pkg))

export default packageConfigs
