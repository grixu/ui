import BaseInput from "../src/BaseInput.vue"
import MailIcon from "~icons/heroicons-solid/mail"
import QuestionMarkCircleIcon from "~icons/heroicons-solid/question-mark-circle"
import { InputTypesEnum } from "../src/types"
import { ref } from "vue"

export default {
  component: BaseInput,
  title: "components/BaseInput",
  args: {
    modelValue: "",
    type: "text",
    id: "",
    fieldName: "",
    label: "",
    placeholder: "",
    helpText: "",
    cornerHint: "",
  },
  argTypes: {
    "modelValue": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "type": {
      control: {
        type: "select",
        required: false,
        options: Object.keys(InputTypesEnum),
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "id": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "Generated UUID v4" },
      },
    },
    "fieldName": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "label": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "placeholder": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "helpText": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "cornerHint": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "keyShortcut": {
      control: {
        type: "text",
        required: false,
      },
      table: {
        category: "Props",
        defaultValue: { summary: "undefined" },
      },
    },
    "leading-icon": {
      name: "leading-icon",
      control: {
        type: null,
        required: false,
        defaultValue: undefined,
      },
      table: {
        category: "Slots",
      },
      description: "Use this slot to put icon on left side of input",
    },
    "trailing-icon": {
      name: "trailing-icon",
      control: null,
      table: {
        category: "Slots",
      },
      description: "Use this slot to put icon on right side of input",
    },
    "help-text": {
      name: "help-text",
      control: null,
      table: {
        category: "Slots",
      },
      description: "Use this slot to provide more extensive help text",
    },
    "onUpdate": {
      name: "On update event",
      action: "update:modelValue",
      table: {
        category: "Events",
      },
      description: "Simple event when you enter new value into input field",
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
}

const EmptyTemplate = args => ({
  components: { BaseInput, QuestionMarkCircleIcon, MailIcon },
  setup() {
    return { args }
  },
  template: `
    <BaseInput v-bind="args" :model-value="args.modelValue" @update:modelValue="args.onUpdate">
    </BaseInput>`,
})

const TemplateLeadingIcon = args => ({
  components: { BaseInput, QuestionMarkCircleIcon, MailIcon },
  setup() {
    return { args }
  },
  template: `
    <BaseInput v-bind="args">
    <template #leading-icon><MailIcon /></template>
    </BaseInput>`,
})

const TemplateTrailingIcon = args => ({
  components: { BaseInput, QuestionMarkCircleIcon, MailIcon },
  setup() {
    return { args }
  },
  template: `
    <BaseInput v-bind="args">
    <template #trailing-icon><QuestionMarkCircleIcon /></template>
    </BaseInput>`,
})

export const WithLabel = EmptyTemplate.bind({})
WithLabel.args = { fieldName: "typical", label: "Typical label" }

export const WithPlaceholder = EmptyTemplate.bind({})
WithPlaceholder.args = { placeholder: "Enter something here..." }

export const WithHelpText = EmptyTemplate.bind({})
WithHelpText.args = { helpText: "Here you can some unhelpful description" }

export const WithCornerHint = EmptyTemplate.bind({})
WithCornerHint.args = { cornerHint: "Corner!" }

export const WithKeyShortcut = EmptyTemplate.bind({})
WithKeyShortcut.args = { keyShortcut: "⌘K" }

export const WithTrailingIcon = TemplateTrailingIcon.bind({})
WithTrailingIcon.args = { label: "Field with icon" }

export const WithLeadingIcon = TemplateLeadingIcon.bind({})
WithLeadingIcon.args = { label: "Field with icon" }

const HelpTextTemplate = args => ({
  components: { BaseInput, QuestionMarkCircleIcon, MailIcon },
  setup() {
    return { args }
  },
  template: `
    <BaseInput v-bind="args">
      <template #help-text>{{ args['help-text'] }}</template>
    </BaseInput>`,
})

export const WithHelpTextSlot = HelpTextTemplate.bind({})
WithHelpTextSlot.args = { "help-text": "Here you can some unhelpful description" }

const WithErrorsSlotTemplate = args => ({
  components: { BaseInput, QuestionMarkCircleIcon, MailIcon },
  setup() {
    return { args }
  },
  template: `
    <BaseInput v-bind="args">
      <template #errors>{{ args.errors }}</template>
    </BaseInput>`,
})

export const WithErrorsSlot = WithErrorsSlotTemplate.bind({})
WithErrorsSlot.args = { errors: "Oh, there is an error!" }
