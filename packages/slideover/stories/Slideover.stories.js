import Slideover from "../src"
import Button from "@grixu/button"

export default {
  component: Slideover,
  title: "components/Slideover",
  args: {
    title: "Title",
    default: "Content",
    closeIcon: true,
  },
  argTypes: {
    title: {
      name: "title",
      control: {
        type: "text",
      },
      table: {
        category: "slots",
        defaultValue: { summary: "" },
      },
      description: "Using this slot you can customize header text in slideover. By default this slot is empty.",
    },
    default: {
      name: "default",
      control: {
        type: "text",
      },
      table: {
        category: "slots",
        defaultValue: { summary: "" },
      },
    },
    actions: {
      name: "actions",
      control: {
        type: null,
      },
      table: {
        category: "slots",
      },
      description:
        "Using this slot you can customize actions in bottom part of slideover. By default there is a close button.",
    },
    closeIcon: {
      control: {
        type: "boolean",
      },
      table: {
        category: "props",
        defaultValue: { summary: true },
      },
    },
    onClose: {
      name: "@close",
      action: "close",
      table: {
        category: "events",
      },
      description: "This event is emitted by all close button in slideover",
    },
  },
}

const Template = args => ({
  components: { Slideover },
  setup() {
    return { args }
  },
  template: `<Slideover :close-icon="args.closeIcon" @close="args.onClose">
      <template #title>{{ args.title }}</template>
      <template #default>{{ args.default }}</template>
    </Slideover>`,
})

export const WithIcon = Template.bind({})
WithIcon.args = { closeIcon: true }

export const WithoutIcon = Template.bind({})
WithoutIcon.args = { closeIcon: false }

const CustomActionsTemplate = args => ({
  components: { Slideover, Button },
  setup() {
    return { args }
  },
  template: `<Slideover :close-icon="args.closeIcon" @close="args.onClose">
      <template #title>{{ args.title }}</template>
      <template #default>{{ args.default }}</template>
      <template #actions="{ close }">
        <Button primary data-testid="slideover-custom-action-button">Import action</Button>
        <Button info @click="close">Just close me</Button>
      </template>
    </Slideover>`,
})

export const CustomActions = CustomActionsTemplate.bind({})
CustomActions.args = { closeIcon: true }
