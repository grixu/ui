# @grixu/paginator

It's simple pagination component & composable written in Vue 3, styled with WindiCSS.

## Usage

```vue

<template>
  <NavPagination :paginator="paginator">
    <template #buttons="{ paginator }">
      You can customize buttons on the right side, or even do something completely different here, because you have 
      access, to whole paginator object!
    </template>
  </NavPagination>
</template>

<script setup>
import  {NavPagination, usePaginator } from '@grixu/paginator'

const someReactiveDataSource = ref([])
const perPage = ref(25)

const paginator = usePaginator(someReactiveDataSource, perPage)
</script>
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) in each package for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](../../CONTRIBUTING.md) for details.

## Credits

- [Mateusz Gostański](https://github.com/grixu)

## License

The MIT License (MIT). Please see [License File](../../LICENSE.md) for more information.
