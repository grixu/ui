import Button from "../src/Button.vue";
import IconClose from "~icons/heroicons-solid/x";

export default {
  component: Button,
  title: "components/Button",
  args: {
    default: "Click me",
    color: "link",
    customColor: "",
    disabled: false,
    withIcon: false
  },
  argTypes: {
    default: {
      controls: {
        type: "text"
      },
      table: {
        category: "Slots"
      }
    },
    icon: {
      name: 'Icon slot',
      control: null,
      table: {
        category: 'Slots'
      },
      description: 'Use this slot to put icon into button. But remember about adding with-icon prop to enable rendering it'
    },
    color: {
      options: ["primary", "success", "danger", "info", "warning", "link"],
      type: "string",
      control: { type: "select" },
      table: {
        category: "Props",
        defaultValue: { summary: 'link' },
      },
      description: "Through this property you can select built-in color theme or define yours putting here CSS classes which describe text & background color"
    },
    withIcon: {
      type: {
        name: "boolean",
        required: false
      },
      table: {
        category: "Props",
        defaultValue: { summary: false },
      },
      description: "This boolean flag control adding extra slot #icon though which you can put icon into button. This slot is wrapped with extra div which have CSS styles to align icon to center both axes."
    },
    disabled: {
      type: {
        name: 'boolean',
        required: false
      },
      table: {
        category: 'Props',
        defaultValue: { summary: false },
      },
      description: 'Simple boolean flag to make button disabled'
    },
    customColor: {
      control: { type: "text" },
      description: 'Additional field created only in Custom Color Story to handle declaring own color.'
    },
    onClick: {
      name: 'On click event',
      action: 'click',
      table: {
        category: "Events"
      },
      description: "Simple event when you click on it"
    }
  },
  parameters: {
    docs: {
      page: null,
    }
  }
};

const Template = (args) => ({
  components: { Button, IconClose },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args">
    <template #icon>
      <IconClose />
    </template>
    {{ args.default }}
    </Button>`
});

export const Link = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { color: "primary" };

export const Success = Template.bind({});
Success.args = { color: "success" };

export const Danger = Template.bind({});
Danger.args = { color: "danger" };

export const Warning = Template.bind({});
Warning.args = { color: "warning" };

export const Info = Template.bind({});
Info.args = { color: "info" };

export const Disabled = Template.bind({});
Disabled.args = {
  color: "primary",
  disabled: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  withIcon: true,
  color: "primary"
};

const CustomTemplate = (args) => ({
  components: { Button, IconClose },
  setup() {
    return { args };
  },
  template: `
    <Button :color="args.customColor.length > 0 ? args.customColor : args.color" :with-icon="args.withIcon">
    <template #icon>
      <IconClose />
    </template>
    {{ args.default }}
    </Button>`
});
export const CustomColor = CustomTemplate.bind({});
CustomColor.args = {
  withIcon: true,
  customColor: "px-3 py-2 bg-green-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:bg-green-700"
};
