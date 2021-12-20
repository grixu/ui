import ListItemGrid from "./ItemGrid.vue"
import ListItemStacked from "./ItemStacked.vue"
import { z } from "zod"
import { ListWrapperComponents } from "./types"

export const allowedComponents: ListWrapperComponents = {
  stack: {
    comp: ListItemStacked,
  },
  grid: {
    comp: ListItemGrid,
    css: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
  },
}

export function isAllowedComponent(item: unknown) {
  const schema = z.string()
  const cleanItem = schema.parse(item)

  if (Object.keys(allowedComponents).includes(cleanItem)) return true
  throw new Error("Type mismatch")
}

export function isArrayNotEmpty(data: unknown) {
  if (Array.isArray(data) && data.length > 0) return true

  throw new Error("Input data are mismatched")
}
