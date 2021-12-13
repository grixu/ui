import ListItemGrid from "../src/ItemGrid.vue"
import ListItemStacked from "../src/ItemStacked.vue"

export interface ListWrapperComponents {
  [index: string]: {
    comp: typeof ListItemGrid | typeof ListItemStacked
    css?: string
  }
}
