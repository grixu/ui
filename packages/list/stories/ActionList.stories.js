import ActionList from "../src/ActionList.vue"
import Avatar from "@grixu/avatar"
import faker from "faker"

export default {
  component: ActionList,
  title: "components/ActionList",
  args: {
    title: "Example title",
    perPage: 25,
    amount: 10,
  },
  argTypes: {
    items: {
      table: {
        category: "Props",
      },
      description: "Array with objects which you want present & allow an action on them",
    },
    perPage: {
      table: {
        category: "Props",
      },
      description: "Amount of items per page. List is paginated",
    },
    amount: {
      table: {
        category: "Story",
      },
      description: "Amount of items generated in story.",
    },
  },
}

const Template = args => ({
  components: { ActionList, Avatar },
  setup() {
    const items = Array(args.amount)
      .fill(1)
      .map(() => ({
        name: faker.name.findName(),
      }))
    return { args, items }
  },
  template: `<ActionList :items="items" :per-page="args.perPage">
    <template #title>{{ args.title }}</template>
    <template #default="{ item }">  <Avatar /> {{ item.name }} </template>
  </ActionList>`,
})

export const ShortList = Template.bind({})
ShortList.args = { amount: 10 }

const CustomTemplate = args => ({
  components: { ActionList },
  setup() {
    const items = Array(args.amount)
      .fill(1)
      .map(() => ({
        id: Math.floor(Math.random() * 1000),
        name: faker.name.findName(),
      }))
    return { args, items }
  },
  template: `<ActionList :items="items" :per-page="args.perPage">
    <template #title>{{ args.title }}</template>
    <template #default="{ item }">
      <span class="bg-primary-light text-white py-1 px-3 rounded-full">{{ item.id }}</span>
      {{ item.name }}
    </template>
  </ActionList>`,
})

export const LongList = CustomTemplate.bind({})
LongList.args = { amount: 100 }
