import { mount } from "@vue/test-utils"
import { composeStories } from "@storybook/testing-vue3"
// @ts-ignore
import * as stories from "../stories/Button.stories.js"

describe("Button", () => {
  const { Link, Primary, Success, Danger, Warning, Info, Disabled, WithIcon } = composeStories(stories)

  test("component itself & slot value are visible", () => {
    const wrapper = mount(Link())

    expect(wrapper.find("[data-testid='button']").isVisible()).toBeTruthy()
    expect(wrapper.find("[data-testid='button']").html()).toContain(stories.default.args.default)
  })

  test("is clickable & emits an event", () => {
    const wrapper = mount(Primary())

    wrapper.find("[data-testid='button']").trigger("click")
    expect(wrapper.emitted("click")).toHaveLength(1)
  })

  test("it not emitting event when disabled", () => {
    const disabledButton = mount(Disabled())

    disabledButton.find("[data-testid='button']").trigger("click")
    expect(disabledButton.emitted("click")).toBeFalsy()
  })

  test("it have different styles accordingly to prop", () => {
    const buttonWrapper = mount(Primary())
    const LinkTypeCss = buttonWrapper.find("[data-testid='button']").classes().join("")

    const iconWrapper = mount(WithIcon())
    const iconTypeCss = iconWrapper.find("[data-testid='button-icon']").classes().join("")

    expect(iconWrapper.find("[data-testid='button-icon']").isVisible()).toBeTruthy()
    expect(LinkTypeCss).not.toMatch(iconTypeCss)
  })

  it("have 5 colorist versions", () => {
    const colors = [Primary(), Success(), Danger(), Warning(), Info()]

    let previous = ""

    colors.forEach(color => {
      const wrapper = mount(color)
      const actual = wrapper.find("[data-testid='button']").classes().join("")
      expect(actual).not.toBe(previous)
      previous = actual
    })
  })
})
