import Button from "../src/Button.vue"
import IconClose from "~icons/heroicons-solid/x"

export default {
  component: Button,
  title: "components/Button",
  args: {
    default: "Click me",
    link: false,
    primary: false,
    warning: false,
    danger: false,
    info: false,
    success: false,
    disabled: false,
    withIcon: false,
  },
  argTypes: {
    default: {
      controls: {
        type: "text",
      },
      table: {
        category: "Slots",
      },
    },
    icon: {
      name: "Icon slot",
      control: null,
      table: {
        category: "Slots",
      },
      description:
        "Use this slot to put icon into button. But remember about adding with-icon prop to enable rendering it",
    },
    primary: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
    },
    success: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
    },
    danger: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
    },
    info: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
    },
    warning: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
    },
    link: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
    },
    withIcon: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
      description:
        "This boolean flag control adding extra slot #icon though which you can put icon into button. This slot is wrapped with extra div which have CSS styles to align icon to center both axes.",
    },
    disabled: {
      type: {
        name: "boolean",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
      description: "Simple boolean flag to make button disabled",
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
  parameters: {
    docs: {
      page: null,
    },
  },
}

const Template = args => ({
  components: { Button, IconClose },
  setup() {
    return { args }
  },
  template: `
    <Button v-bind="args">
    <template #icon>
      <IconClose />
    </template>
    {{ args.default }}
    </Button>`,
})

export const Link = Template.bind({})
Link.args = { link: true }

export const Primary = Template.bind({})
Primary.args = { primary: true }

export const Success = Template.bind({})
Success.args = { success: true }

export const Danger = Template.bind({})
Danger.args = { danger: true }

export const Warning = Template.bind({})
Warning.args = { warning: true }

export const Info = Template.bind({})
Info.args = { info: true }

export const Disabled = Template.bind({})
Disabled.args = {
  primary: true,
  disabled: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  withIcon: true,
  primary: true,
}
