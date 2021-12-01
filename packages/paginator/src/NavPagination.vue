<template>
  <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
    <div class="hidden sm:block">
      <slot name="info" :paginator="paginator">
        <p class="text-sm text-gray-700" data-testid="nav-pagination-info-wrapper">
          Wyniki od
          <span class="font-medium">{{ paginator.currentItem.value + 1 }}</span>
          do
          <span class="font-medium">{{ paginator.currentItem.value + paginator.perPage.value }}</span>
          z
          <span class="font-medium">{{ paginator.totalItems }}</span>
        </p>
      </slot>
    </div>
    <div class="flex-1 flex justify-between sm:justify-end">
      <slot name="buttons" :paginator="paginator">
        <button @click="paginator.prevPage()" data-testid="nav-pagination-prev" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Poprzednia
        </button>
        <button @click="paginator.nextPage()" data-testid="nav-pagination-next" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Następna
        </button>
      </slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Paginator } from "./usePaginator";

defineProps<{ paginator: Paginator<unknown> }>()
</script>
