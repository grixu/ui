import { mount } from "@vue/test-utils"
// @ts-ignore
import * as stories from "../stories/Badge.stories"
import { composeStories } from "@storybook/testing-vue3"

describe("Badge", () => {
  const { Success, Warning, Error, Info } = composeStories(stories)

  it("s visible and renders slot text", () => {
    const wrapper = mount(Success())

    expect(wrapper.find('[data-testid="badge-wrapper"]').isVisible()).toBeTruthy()
    expect(wrapper.find('[data-testid="badge-wrapper"]').html()).toContain(stories.default.args.default)
  })

  it("renders proper styles when it receives status props", async () => {
    const badgeStatuses = [Success(), Warning(), Error(), Info()]
    let lastClasses = ""

    badgeStatuses.forEach(item => {
      const wrapper = mount(item)
      const wrapperClasses = wrapper.find('[data-testid="badge-wrapper"]').element.classList.value
      expect(wrapperClasses).not.toEqual(lastClasses)
      lastClasses = wrapperClasses
    })
  })
})
