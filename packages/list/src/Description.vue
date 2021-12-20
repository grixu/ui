<template>
	<div
		data-testid="list-description-wrapper"
		class="bg-white shadow overflow-hidden sm:rounded-lg lg:w-6/12 lg:mx-auto"
	>
		<div v-for="(value, key) in items" :key="key" class="border-t border-gray-200 px-4">
			<div class="p-2 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 sm:p-3.5 lg:grid-cols-3 items-center" data-testid="list-description-item">
				{{ getTitle(key, value) }}
				<div data-testid="list-description-content" class="text-gray-regular font-medium self-start">
					<slot :name="kebabCase(key)" :content="getContent(value)" :value="value">
						{{ getContent(value) }}
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { kebabCase, upperFirst } from "scule"
import {DescriptionEntry, DescriptionEntryValue, DescriptionRecord} from "./types";

const props = defineProps<{
  items: DescriptionEntry
}>()

const isEntry = (value: DescriptionEntryValue): value is DescriptionRecord => {
  if (typeof value !== 'object') return false
  return 'label' in value && 'content' in value
}

const getTitle = (key: string, value: DescriptionEntryValue): string => {
  if (isEntry(value)) {
    return value.label
  }

  return upperFirst(key)
}

const getContent = (value: DescriptionEntryValue) => {
  if (isEntry(value)) {
    return value.content
  }

  return value
}
</script>
