# @grixu/list

It's set of list components. There main two components:
* `ListWrapper`
* `ActionList`

## List Wrapper

It is a wrapper component which allows you to display an array of objects as a stacked or grid list.

### Usage

```vue
<template>
  <ListWrapper layout="stack" :items="dataItems" per-page="12">
    <template #header>Header</template>
    <template #details>Minor details?  Please put them here.</template>
    <template #buttons>Provide buttons to allow user to take actions</template>
    <template #avatar>You can display user avatar here</template>
    Default slot is used to provide main information
  </ListWrapper>
</template>

<script setup>
import { ListWrapper } from "@grixu/list"
</script>
```

## Action List

Action list is simple list based on provided array of objects, on which of them you can execute an action. By default,
we provide close icon (which remove action), but you can adjust it, through slots.

### Usage

```vue
<template>
  <ActionList>
    <template #title>List of users</template>
    <template #action>
      Here, you can customize button which is used to handle an action
    </template>
    <template #default="{ item }">
      And of course customize way, you display information using scopedSlot!
    </template>
  </ActionList>
</template>

<script setup>
import { ActionList } from "@grixu/list"
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
