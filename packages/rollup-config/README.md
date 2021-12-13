# @grixu/rollup-config

It's simple Rollup config for use in grixu/ui library and other projects. 

## Usage

```bash
yarn add -D @grixu/rollup-config
```

Then, add `rollup.config.js` file with following content:

```
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
  },
  css: {
    file: pkg.style,
  },
}

const allFormats = Object.keys(outputConfigs)
const packageConfigs = allFormats.map(format => createConfig(format, outputConfigs[format], banner, pkg))

export default packageConfigs

```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) in each package for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](../../CONTRIBUTING.md) for details.

## Credits

- [Mateusz Gostański](https://github.com/grixu)

## License

The MIT License (MIT). Please see [License File](../../LICENSE.md) for more information.
