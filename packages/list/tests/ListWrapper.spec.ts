import { composeStories } from "@storybook/testing-vue3"
import { mount } from "@vue/test-utils"
// @ts-ignore
import * as stories from "../stories/ListWrapper.stories.js"

describe("ListWrapper", () => {
  const { Grid, Stack } = composeStories(stories)

  it("properly renders as grid", () => {
    const wrapper = mount(Grid())
    expect(wrapper.find('[data-testid="list-item-grid"]').isVisible()).toBeTruthy()
  })

  it("properly renders as list", () => {
    const wrapper = mount(Stack())
    expect(wrapper.find('[data-testid="list-item-stacked"]').isVisible()).toBeTruthy()
  })

  it("switching pages correctly", async () => {
    const wrapper = mount(Stack())
    expect(wrapper.find('[data-testid="nav-pagination-prev"]').isVisible()).toBeTruthy()
    expect(wrapper.find('[data-testid="nav-pagination-next"]').isVisible()).toBeTruthy()

    const preSwitchHtmlContent = wrapper.find('[data-testid="list-wrapper"]').html()
    await wrapper.find('[data-testid="nav-pagination-next"]').trigger("click")
    expect(wrapper.find('[data-testid="list-wrapper"]').html()).not.toMatch(preSwitchHtmlContent)
  })
})
