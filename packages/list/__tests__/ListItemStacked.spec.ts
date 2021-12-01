import { composeStories } from "@storybook/testing-vue3";
import { mount } from "@vue/test-utils"
// @ts-ignore
import * as stories from "../stories/ListItemStacked.stories.js"

describe("ListItemStacked", () => {
	const { ExampleTwo } = composeStories(stories)

	it("component is visible", () => {
		const wrapper = mount(ExampleTwo())
		expect(wrapper.find('[data-testid="list-item-stacked"]').isVisible()).toBeTruthy()

		const html = wrapper.find('[data-testid="list-item-stacked"]').html()
		for (const item of Object.values(stories.default.args)) {
			expect(html).toContain(item)
		}
	})
})
