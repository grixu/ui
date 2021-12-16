import Badge from "../src"

export default {
  component: Badge,
  title: "components/Badge",
  args: {
    success: false,
    error: false,
    warning: false,
    info: false,
    default: "Content",
  },
  argTypes: {
    success: {
      table: {
        category: "props",
        defaultValue: { summary: false },
      },
      description: "Just a flag for success style",
    },
    error: {
      table: {
        category: "props",
        defaultValue: { summary: false },
      },
      description: "Just a flag for error style",
    },
    warning: {
      table: {
        category: "props",
        defaultValue: { summary: false },
      },
      description: "Just a flag for warning style",
    },
    info: {
      table: {
        category: "props",
        defaultValue: { summary: false },
      },
      description: "Just a flag for info style",
    },
    default: {
      type: {
        name: "text",
      },
      table: {
        category: "slots",
        defaultValue: { summary: "" },
      },
      description: "Use default slot to provide text into badge",
    },
  },
}

const Template = args => ({
  components: { Badge },
  setup() {
    return { args }
  },
  template: '<Badge v-bind="args">{{ args.default }}</Badge>',
})

export const Success = Template.bind({})
Success.args = { success: true }

export const Warning = Template.bind({})
Warning.args = { warning: true }

export const Error = Template.bind({})
Error.args = { error: true }

export const Info = Template.bind({})
Info.args = { info: true }
