import { composeStories } from "@storybook/testing-vue3";
import { mount } from "@vue/test-utils"
// @ts-ignore
import * as stories from '../stories/ListItemGrid.stories.js'

describe("ListItemGrid", () => {
	const { ExampleOne } = composeStories(stories)

	it("renders properly", () => {
		const wrapper = mount(ExampleOne())
		expect(wrapper.find('[data-testid="list-item-grid"]').isVisible()).toBeTruthy()

		const html = wrapper.find('[data-testid="list-item-grid"]').html()
		for (const [,item] of Object.entries(stories.default.args)) {
			expect(html).toContain(item)
		}

	})
})
