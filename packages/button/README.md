# @grixu/button

It's simple button component in Vue 3, styled with WindiCSS.

## Usage

```vue
<template>
  <Button primary @click="showAlert">Click me</Button>
</template>

<script setup>
import Button from '@grixu/button'

const showAlert = () => {
  console.log('Alert is not visible for ordinary mortals...')
}
</script>
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) in each package for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](../../CONTRIBUTING.md) for details.

## Credits

- [Mateusz Gostański](https://github.com/grixu)
- [Samuel Baron](https://github.com/samuelbaron)
- [Mateusz Skrobiś](https://github.com/mateuszskrobis)

## License

The MIT License (MIT). Please see [License File](../../LICENSE.md) for more information.
