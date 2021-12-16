# @grixu/slideover

It's simple slideover component in Vue 3, styled with WindiCSS.

## Usage

```vue

<template>
  <Slideover @close="hideSlideover" v-if="isSlideoverVisible">
    <slot #title>You can customize title, but it's optional</slot>
    Put your slideover content here.
    <slot #actions="{ close }">
      <Button primary @click="takeImportantAction">Important action</Button>
      <Button info @click="close">Ssh-hh, just close it!</Button>
    </slot>
  </Slideover>
</template>

<script setup>
import { ref } from 'vue'
import Slideover from '@grixu/slideover'
import Button from '@grixu/button'

const isSlideoverVisible = ref(true)
const hideSlideover = () => isSlideoverVisible.value = false
const takeImportantAction = () => console.log("I don't know what I'm doing...")
</script>
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) in each package for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](../../CONTRIBUTING.md) for details.

## Credits

- [Mateusz Gostański](https://github.com/grixu)
- [Samuel Baron](https://github.com/samuelbaron)

## License

The MIT License (MIT). Please see [License File](../../LICENSE.md) for more information.
