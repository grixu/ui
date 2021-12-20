import { mount } from "@vue/test-utils"
import { composeStories } from "@storybook/testing-vue3"
// @ts-ignore
import * as stories from "../stories/Description.stories.js"
import { DescriptionRecord } from "../src/types"

describe("ListDescription", () => {
  const { WithSlots, WithCustomLabels } = composeStories(stories)

  it("is visible", () => {
    const wrapper = mount(WithSlots())

    expect(wrapper.find('[data-testid="list-description-wrapper"]').isVisible()).toBeTruthy()
  })

  it("displays all fields", () => {
    const wrapper = mount(WithSlots())

    expect(wrapper.findAll('[data-testid="list-description-content"]')).toHaveLength(
      Object.keys(stories.default.args.items).length
    )
  })

  it("allow to use custom labels", () => {
    const wrapper = mount(WithCustomLabels())

    const allItems = wrapper.findAll('[data-testid="list-description-item"]')

    expect(allItems).toHaveLength(Object.keys(stories.WithCustomLabels.args.items).length)
    allItems.forEach(item => {
      expect(item.isVisible()).toBeTruthy()
    })

    Object.values(stories.WithCustomLabels.args.items).forEach(value => {
      expect(
        allItems.findIndex(item => {
          return item.html().indexOf((value as DescriptionRecord).label) > 0
        })
      ).toBeGreaterThanOrEqual(0)
    })
  })
})
