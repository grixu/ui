import { mount } from "@vue/test-utils"
import { composeStories } from "@storybook/testing-vue3"
// @ts-ignore
import * as stories from "../stories/BaseInput.stories.js"
import BaseInput from "../src/BaseInput.vue"

describe("BaseInput", () => {
  const {
    WithLabel,
    WithCornerHint,
    WithHelpText,
    WithHelpTextSlot,
    WithTrailingIcon,
    WithLeadingIcon,
    WithKeyShortcut,
  } = composeStories(stories)

  it("renders properly with label", () => {
    const wrapper = mount(WithLabel())

    expect(wrapper.find('[data-testid="base-input"]').isVisible()).toBeTruthy()
    expect(wrapper.find('[data-testid="base-input-label"]').isVisible()).toBeTruthy()
    expect(wrapper.find('[data-testid="base-input-label"]').text()).toContain(stories.WithLabel.args.label)
  })

  it("renders properly help text given through prop", () => {
    const wrapper = mount(WithHelpText())

    expect(wrapper.find('[data-testid="base-input-help-text"]').isVisible()).toBeTruthy()
    expect(wrapper.find('[data-testid="base-input-help-text"]').text()).toContain(stories.WithHelpText.args.helpText)
  })

  it("renders properly help text given through slot", () => {
    const wrapper = mount(WithHelpTextSlot())

    expect(wrapper.find('[data-testid="base-input-help-text"]').isVisible()).toBeTruthy()
    expect(wrapper.find('[data-testid="base-input-help-text"]').text()).toContain(
      stories.WithHelpTextSlot.args.helpTextSlot
    )
  })

  it("renders properly corner hint", () => {
    const wrapper = mount(WithCornerHint())

    expect(wrapper.find('[data-testid="base-input-corner-hint"]').text()).toContain(
      stories.WithCornerHint.args.cornerHint
    )
  })

  it("render properly trailing-icon", () => {
    const wrapper = mount(WithTrailingIcon())

    expect(wrapper.find('[data-testid="base-input-trailing-icon"]').isVisible()).toBeTruthy()
  })

  it("render properly leading-icon", () => {
    const wrapper = mount(WithLeadingIcon())

    expect(wrapper.find('[data-testid="base-input-leading-icon"]').isVisible()).toBeTruthy()
  })

  it("handle v-model", async () => {
    const fakeValue = "test"
    const wrapper = mount(BaseInput, {
      props: {
        type: "text",
      },
    })

    await wrapper.find('[data-testid="base-input"]').setValue(fakeValue)

    expect(wrapper.emitted()["update:modelValue"][0]).toBeTruthy()
    expect(wrapper.emitted()["update:modelValue"][0]).toContain(fakeValue)
  })

  it("render properly key shortcut", () => {
    const wrapper = mount(WithKeyShortcut())

    expect(wrapper.find('[data-testid="base-input-key-shortcut"]').isVisible()).toBeTruthy()
  })
})
