import { mount } from "@vue/test-utils"
import { composeStories } from "@storybook/testing-vue3"
// @ts-ignore
import * as stories from "../stories/Slideover.stories"
import Button from "@grixu/button"
import Slideover from "../src"

describe("Slideover", () => {
  const { WithIcon } = composeStories(stories)

  it("is visible and initial values are passed", () => {
    const wrapper = mount(WithIcon())

    expect(wrapper.find('[data-testid="slideover"]').isVisible()).toBeTruthy()
    expect(wrapper.find("h1").element.textContent).toContain(stories.default.args.title)
    expect(wrapper.find('[data-testid="actions-slot-wrapper"]').isVisible()).toBeTruthy()
  })

  it("emits a close event", async () => {
    const wrapper = mount(Slideover, {
      global: {
        components: {
          Button,
        },
      },
    })

    await wrapper.find('[data-testid="close-button"]').trigger("click")
    expect(wrapper.emitted("close")).toHaveLength(1)

    await wrapper.find('[data-testid="button"]').trigger("click")
    expect(wrapper.emitted("close")).toHaveLength(2)
  })
})
