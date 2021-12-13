import Avatar from "../src/Avatar.vue"
import IconTrash from "~icons/heroicons-solid/trash"

export default {
  component: Avatar,
  title: "components/Avatar",
  args: {
    img: "",
    text: "",
  },
  argTypes: {
    text: {
      name: "Text",
      type: {
        name: "string",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "John Doe" },
      },
      description: "Text value from which component generating initials when image is not available",
    },
    img: {
      name: "Avatar's URL",
      type: {
        name: "string",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "https://via.placeholder.com/150" },
      },
      description:
        "Avatar's URL - just it. But if you not provide URL, you should provide alternative text, to generate initials on avatar",
    },
    default: {
      name: "Default Slot",
      table: {
        category: "Slots",
      },
      control: {
        type: "text",
      },
      description:
        "If you don't pass either url or text, component just show icon. Of course it's adjustable - by this slot you can provide your own icon.",
    },
    onClick: {
      name: "On click event",
      action: "click",
      table: {
        category: "Events",
      },
      description: "Simple event when you click on it",
    },
  },
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  docs: {
    page: null,
  },
}

const Template = args => ({
  components: { Avatar },
  setup() {
    return { args }
  },
  template: `
    <Avatar v-bind="args"></Avatar>`,
})

export const Text = Template.bind({})
Text.args = {
  text: "John Doe",
}

export const VeryLongText = Template.bind({})
VeryLongText.args = {
  text: "This Is A Very Long Text",
}

export const Image = Template.bind({})
Image.args = {
  img: "https://www.polskieprzetwornice.pl/sklep/img/avatar3.png",
}

export const DefaultIcon = Template.bind({})

export const Custom = args => ({
  components: { Avatar, IconTrash },
  setup() {
    return { args }
  },
  template: `
    <Avatar>
      <IconTrash />
    </Avatar>`,
})
