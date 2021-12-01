import { composeStories } from "@storybook/testing-vue3";
import { mount } from "@vue/test-utils"
// @ts-ignore
import * as stories from '../stories/Avatar.stories.js'

describe("Avatar", () => {
	const { Text, VeryLongText, Image, DefaultIcon } = composeStories(stories)

	it("is visible and renders slot icon", () => {
		const wrapper = mount(DefaultIcon())
		expect(wrapper.find('[data-testid="avatar-wrapper"]').isVisible()).toBeTruthy()
		expect(wrapper.find('[data-testid="icon-stub"]').isVisible()).toBeTruthy()
	})

	it("displays text initials", async () => {
		const wrapper = mount(Text())
		stories.Text.args.text.split(' ').forEach((item: string) => {
			expect(wrapper.find('[data-testid="avatar-wrapper"]').text().includes(item[0])).toBeTruthy()
		})
	})

	it("displays maximum three first letters of text prop", async () => {
		const wrapper = mount(VeryLongText())
		expect(wrapper.find('[data-testid="avatar-text"]').text()).toHaveLength(3)
	})

	it("it displays image", async () => {
		const wrapper = mount(Image())
		expect(wrapper.find('[data-testid="avatar-image"]').isVisible()).toBeTruthy()
		expect(wrapper.find('[data-testid="avatar-image"]').attributes().src).toEqual(stories.Image.args.img)
	})

	it("emit click event", async () => {
		const wrapper = mount(Image())
		await expect(wrapper.find('[data-testid="avatar-wrapper"]').trigger("click"))

		expect(wrapper.emitted("click")).toBeTruthy()
	})
})
