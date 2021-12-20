import ListDescription from "../src/Description.vue"
import Badge from "@grixu/badge"
import Avatar from "@grixu/avatar"

export default {
  component: ListDescription,
  title: "components/ListDescription",
  args: {
    items: {
      ID: 12312321,
      customer: "Mateusz Skrobiś",
      invoice: false,
      salesmens: ["Marek S", "Jarek D", "Czarek M"],
      address: "Polna 140B",
      area: "North",
    },
  },
  argTypes: {
    items: {
      table: {
        category: "props",
      },
      description:
        "Object with data which is used to display data. By default each key is label, and each value is casted to String to display. But you can customize it though slots.",
    },
    default: {
      table: {
        category: "slots",
      },
      description: "You can customize how each of fields are displayed by creating <template #keyName></template>",
    },
  },
}

const Template = args => ({
  components: { ListDescription },
  setup() {
    return { args }
  },
  template: `<ListDescription :items="args.items" />`,
})

export const NoSlots = Template.bind({})

const TemplateTwo = args => ({
  components: { ListDescription, Badge, Avatar },
  setup() {
    return { args }
  },
  template: `<ListDescription :items="args.items">
  <template #id="{ content }"> {{ content }} </template>
  <template #name="{ content }"> {{ content }} </template>
  <template #invoice="{ content }">
    <Badge success>Invoice issued</Badge>
  </template>
  <template #salesmens="{ content }">
    <p class="flex gap-x-2">
      <Avatar v-for="item in content" :key="item" :text="item" class="mr-1"></Avatar>
    </p>
  </template>
  <template #area="{ content, value }">
    <p class="text-lg font-semibold underline"> {{ content }}</p>
  </template>
  </ListDescription>`,
})

export const WithSlots = TemplateTwo.bind({})

export const WithCustomLabels = TemplateTwo.bind({})
WithCustomLabels.args = {
  items: {
    ID: {
      label: "Lp",
      content: 123,
    },
    customer: {
      label: "Klient",
      content: "Mateusz Skrobiś",
    },
    invoice: {
      label: "Fakturowanie?",
      content: false,
    },
    salesmens: {
      label: "Sprzedawcy",
      content: ["Marek S", "Jarek D", "Czarek M"],
    },
    address: {
      label: "Ulica",
      content: "Polna 140B",
    },
    area: {
      label: "Oddział",
      content: "North",
    },
  },
}
