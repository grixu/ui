import ListItemGrid from "../src/ItemGrid.vue";
import ListItemStacked from "../src/ItemStacked.vue";
import { z } from "zod";

export interface ListWrapperComponents {
  [index: string]: {
    comp: typeof ListItemGrid | typeof ListItemStacked
    css?: string
  };
}

export const allowedComponents: ListWrapperComponents = {
  stack: {
    comp: ListItemStacked
  },
  grid: {
    comp: ListItemGrid,
    css: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }
};

export type ListWrapperComponent = keyof typeof allowedComponents

export function isAllowedComponent(item: unknown) {
  const schema = z.string();
  const cleanItem = schema.parse(item);

  if (Object.keys(allowedComponents).includes(cleanItem)) return true;
  throw new Error("Type mismatch");
}

export function isArrayNotEmpty(data: unknown) {
  if (Array.isArray(data) && data.length > 0) return true;

  throw new Error("Input data are mismatched");
}
