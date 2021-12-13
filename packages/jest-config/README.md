# @grixu/jest-config

It's simple Jest config for use in grixu/ui library and other projects.

## Usage

```bash
yarn add -D @grixu/jest-config
```

Then, add `jest.config.js` file with following content:

```js
const base = require("@grixu/jest-config")
const packageJson = require("./package")

module.exports = {
  ...base,
  name: packageJson.name,
  displayName: packageJson.name,
}
```

and create an `babel.config.js`, and fill it like this one:

```js
module.exports = {
  presets: ["@babel/preset-env"],
}

```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) in each package for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](../../CONTRIBUTING.md) for details.

## Credits

- [Mateusz Gostański](https://github.com/grixu)

## License

The MIT License (MIT). Please see [License File](../../LICENSE.md) for more information.
