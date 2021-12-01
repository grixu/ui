import { isRef, ref } from "vue"
import { paginate, usePaginator } from "../src/usePaginator"

const inputData = ref(new Array(1000).fill(1, 0, 1000).map(() => Math.round(Math.random() * 1000)))
const perPage = ref(25)

const movePages = (nextPage: () => void, totalPages: number, isRandom = true) => {
	const last = isRandom ? totalPages / 2 : totalPages

	for (let i = 0; i <= last; i++) {
		nextPage()
	}
}

describe("usePaginator", () => {
	it("return paginated reactive array", () => {
		const result = usePaginator(inputData, perPage)

		expect(typeof result === "object").toBeTruthy()
		expect(isRef(result.data)).toBeTruthy()
		expect(result.data.value.length).toBe(perPage.value)
	})

	it("moves to next page", () => {
		const { data, nextPage, isNextPage, currentPage } = usePaginator(inputData, perPage)

		const dataSnapshot = [...data.value]
		const currentPageSnapshot = currentPage.value
		nextPage()

		expect(data.value).not.toMatchObject(dataSnapshot)
		expect(currentPage.value).not.toBe(currentPageSnapshot)
		expect(currentPage.value).toBeGreaterThan(currentPageSnapshot)
		expect(isNextPage.value).toBeTruthy()
	})

	it("moves to prev page", () => {
		const { data, nextPage, prevPage, isPrevPage, currentPage, totalPages } = usePaginator(inputData, perPage)

		// to be somewhere in middle of array
		movePages(nextPage, totalPages.value)

		const dataSnapshot = [...data.value]
		const currentPageSnapshot = currentPage.value

		prevPage()

		expect(data.value).not.toMatchObject(dataSnapshot)
		expect(currentPage.value).not.toBe(currentPageSnapshot)
		expect(currentPage.value).toBeLessThan(currentPageSnapshot)
		expect(isPrevPage.value).toBeTruthy()
	})

	it("not moves back on first page", () => {
		const { data, isPrevPage, prevPage, currentPage } = usePaginator(inputData, perPage)

		expect(currentPage.value).toBe(1)
		expect(isPrevPage.value).toBeFalsy()
		const dataSnapshot = [...data.value]
		const currentPageSnapshot = currentPage.value

		prevPage()

		expect(data.value).toMatchObject(dataSnapshot)
		expect(currentPage.value).toBe(currentPageSnapshot)
		expect(isPrevPage.value).toBeFalsy()
	})

	it("not moves forward on last page", async () => {
		const { data, isNextPage, nextPage, currentPage, totalPages } = usePaginator(inputData, perPage)

		// move to the last page
		movePages(nextPage, totalPages.value, false)

		expect(currentPage.value).toBe(totalPages.value)
		expect(isNextPage.value).toBeFalsy()

		const dataSnapshot = [...data.value]
		nextPage()

		expect(data.value).toMatchObject(dataSnapshot)
		expect(currentPage.value).toBe(totalPages.value)
		expect(isNextPage.value).toBeFalsy()
	})

	it("reacts on data source changes", async () => {
		const { data, totalItems, totalPages } = usePaginator(inputData, perPage)

		const totalItemsSnapshot = totalItems.value
		const totalPagesSnapshot = totalPages.value
		const dataSnapshot = [...data.value]

		for (let i = totalItemsSnapshot + 1; i < totalItemsSnapshot * 2; i++) {
			inputData.value[i] = Math.round(Math.random() * 10000)
		}

		expect(totalItems.value).toBeGreaterThan(totalItemsSnapshot)
		expect(totalPages.value).toBeGreaterThan(totalPagesSnapshot)
		expect(data.value).toMatchObject(dataSnapshot)
	})

  it('reacts on perPage changes', async () => {
    const { data, totalItems, totalPages } = usePaginator(inputData, perPage)

    const totalItemsSnapshot = totalItems.value
    const totalPagesSnapshot = totalPages.value
    const dataSnapshot = [...data.value]

    perPage.value = 50

    expect(totalItems.value).toBe(totalItemsSnapshot)
    expect(totalPages.value).toBeLessThan(totalPagesSnapshot)
    expect(data.value).not.toMatchObject(dataSnapshot)
    expect(data.value.length).toBe(perPage.value)
  })
})

describe("paginate", () => {
	it("paginate array", () => {
		const resultData = paginate(inputData.value, perPage.value)

		const expectedPart = inputData.value.slice(0, perPage.value)
		expect(resultData).toHaveLength(perPage.value)
		expect(resultData).toMatchObject(expectedPart)
	})
})
