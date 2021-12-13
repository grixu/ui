import { generateArrayRef } from "./utilities/generateArray"
import { usePaginator, NavPagination } from "../src"
import { mount } from "@vue/test-utils"
import { ref } from "vue"

const data = generateArrayRef()
const perPage = ref(25)
const paginator = usePaginator<number>(data, perPage)

describe("NavPagination", () => {
  it("render default slots", () => {
    const wrapper = mount(NavPagination, {
      props: {
        paginator,
      },
    })

    expect(wrapper.find("[data-testid=nav-pagination-info-wrapper]").isVisible()).toBeTruthy()
    expect(wrapper.find("[data-testid=nav-pagination-prev]").isVisible()).toBeTruthy()
    expect(wrapper.find("[data-testid=nav-pagination-next]").isVisible()).toBeTruthy()
  })

  it("passing actions to paginator", async () => {
    const wrapper = mount(NavPagination, {
      props: {
        paginator,
      },
    })

    const renderState = paginator.currentPage.value
    await wrapper.find("[data-testid=nav-pagination-next]").trigger("click")

    expect(paginator.currentPage.value).toBeGreaterThan(renderState)
  })
})
