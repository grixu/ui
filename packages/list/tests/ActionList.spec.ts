import { composeStories } from "@storybook/testing-vue3"
import { mount } from "@vue/test-utils"
// @ts-ignore
import * as stories from "../stories/ActionList.stories.js"

describe("ActionList", () => {
  const { LongList } = composeStories(stories)

  it("renders properly", () => {
    const wrapper = mount(LongList())

    expect(wrapper.find('[data-testid="action-list-wrapper"]').isVisible()).toBeTruthy()
    expect(wrapper.findAll('[data-testid="action-list-item"]')).toHaveLength(stories.default.args.perPage)
  })

  it("emits event", async () => {
    const wrapper = mount(LongList())

    await wrapper.find('[data-testid="action-list-delete-button"]').trigger("click")

    expect(wrapper.emitted("click")).toHaveLength(1)
  })

  it("allows to paginate", async () => {
    const wrapper = mount(LongList())
    const preClickHtmlDump = wrapper.find('[data-testid="action-list-wrapper"]').html()

    await wrapper.find('[data-testid="nav-pagination-next"]').trigger("click")

    expect(wrapper.find('[data-testid="action-list-wrapper"]').html()).not.toMatch(preClickHtmlDump)
  })
})
