import { usePaginator, NavPagination } from "../src"
import { generateArrayRef } from "../tests/utilities/generateArray"
import { ref } from "vue"

export default {
  title: "Nav/Pagination",
  component: NavPagination,
  args: {
    perPage: 25,
  },
  argTypes: {
    perPage: {
      control: { type: "select" },
      options: [25, 50, 100],
    },
  },
}

const Template = args => ({
  components: { NavPagination },
  setup() {
    const paginator = usePaginator(generateArrayRef(), ref(args.perPage ?? 25))

    return {
      paginator,
    }
  },
  template: '<NavPagination :paginator="paginator"></NavPagination>',
})

export const Default = Template.bind({})

export const CustomInfo = args => ({
  components: { NavPagination },
  setup() {
    const paginator = usePaginator(generateArrayRef(), ref(args.perPage ?? 25))

    return {
      paginator,
    }
  },
  template: `
    <NavPagination :paginator="paginator">
      <template #info="{ paginator: obj }">Aktualna strona: {{ obj.currentPage }}</template>
    </NavPagination>`,
})
