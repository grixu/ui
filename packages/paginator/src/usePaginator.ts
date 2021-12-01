import { computed, ComputedRef, readonly, ref, Ref } from "vue";

export interface Paginator<T> {
  inputData: Ref<Array<T>>
  data: ComputedRef<Array<T>>
  isNextPage: ComputedRef<boolean>
  isPrevPage: ComputedRef<boolean>
  currentPage: ComputedRef<number>
  currentItem: Ref<number>
  totalItems: ComputedRef<number>
  totalPages: ComputedRef<number>
  perPage: Ref<number>
  nextPage(): void
  prevPage(): void
}

export function paginate<T>(data: Array<T>, perPage: number, fromRecord: number | undefined = 0): Array<T> {
  return data.slice(fromRecord, fromRecord + perPage)
}

export function usePaginator<T>(inputData: Ref<Array<T>>, perPage: Ref<number>): Paginator<T> {
  const currentItem = ref(0)
  const totalItems = computed(() => inputData.value.length)
  const data = computed(() => paginate<T>(inputData.value, perPage.value, currentItem.value))

  const isNextPage = computed(() => currentItem.value + perPage.value < totalItems.value - 1)
  const isPrevPage = computed(() => currentItem.value >= perPage.value)

  const currentPage = computed(() => currentItem.value / perPage.value + 1)
  const totalPages = computed(() => Math.ceil(totalItems.value / perPage.value))

  const nextPage = () => {
    if (isNextPage.value) currentItem.value += perPage.value
  }

  const prevPage = () => {
    if (isPrevPage.value) currentItem.value -= perPage.value
  }

  return {
    inputData,
    data,
    isNextPage,
    isPrevPage,
    nextPage,
    prevPage,
    totalItems,
    totalPages,
    currentItem: readonly(currentItem),
    currentPage,
    perPage,
  }
}
