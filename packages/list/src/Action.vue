<template>
  <div class="max-w-md" data-testid="action-list-wrapper">
    <div class="pl-3 text-2xl text-primary-darker">
      <slot name="title"></slot>
    </div>
    <ul class="overflow-y-auto">
      <li
        v-for="(item, index) in paginator.data.value"
        :key="index"
        data-testid="action-list-item"
        class="p-2 my-1 rounded-md hover:bg-blue-50 transition-all duration-300"
      >
        <div class="flex items-center">
          <div class="flex items-center gap-x-3 flex-grow">
            <slot :item="item"></slot>
          </div>
            <slot :item="item" name="action">
              <button
                data-testid="action-list-delete-button"
                class="p-2"
                @click="emitClick(item)"
              >
              <IconClose class="hover:text-primary-dark cursor-pointer" />
            </button>
          </slot>
        </div>
      </li>
    </ul>
    <NavPagination :paginator="paginator" />
  </div>
</template>

<script setup lang="ts">
import { NavPagination, usePaginator } from "@grixu/paginator";
import { toRefs } from "vue";
import IconClose from '~icons/heroicons-solid/x'

const props = withDefaults(defineProps<{
  items: Array<unknown>,
  perPage?: number
}>(), {
  perPage: 25
})

const {items, perPage} = toRefs(props)
const paginator = usePaginator(items, perPage)

const emit = defineEmits<{
  (e: 'click', item: unknown): void
}>()

const emitClick = (item: unknown) => emit('click', item)
</script>
