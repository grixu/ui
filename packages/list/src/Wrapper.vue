<template>
  <div>
    <div :class="css" data-testid="list-wrapper">
      <component :is="component" v-for="(item, index) in paginator.data.value" :key="index" :item="item">
        <template v-for="slotName in Object.keys($slots)" v-slot:[slotName]="slotProps">
          <slot :name="slotName" v-bind="slotProps"></slot>
        </template>
      </component>
    </div>
    <NavPagination :paginator="paginator" />
  </div>
</template>

<script lang="ts">
import {
  allowedComponents,
  isArrayNotEmpty,
  isAllowedComponent
} from "./utilities";
import { NavPagination, usePaginator } from "@grixu/paginator";
import {PropType, toRefs, computed, defineComponent} from "vue";

export type ListWrapperComponent = keyof typeof allowedComponents

export default defineComponent({
  name: "ListWrapper",
  components: { NavPagination },
  props: {
    items: {
      type: Array as PropType<Array<unknown>>,
      required: true,
      validator: isArrayNotEmpty
    },
    layout: {
      type: String as PropType<ListWrapperComponent>,
      required: true,
      validator: isAllowedComponent
    },
    perPage: {
      type: Number,
      required: false,
      default: 10,
    }
  },

  setup(props) {
    const { layout, items, perPage } = toRefs(props);

    const paginator = usePaginator(items, perPage);

    const component = computed(() => {
      return allowedComponents[layout.value].comp;
    });

    const css = computed(() => {
      return allowedComponents[layout.value].css || "";
    });

    return { component, css, paginator };
  }
});
</script>
