<template>
	<li
		class="block mb-4 border border-gray rounded-lg bg-white p-3 hover:bg-background"
		data-testid="list-item-stacked"
	>
		<div class="px-3 py-3 flex items-center sm:px-2">
			<slot :item="item" name="avatar"></slot>
			<div class="ml-4 min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<div class="flex text-sm">
						<p class="font-semibold text-base text-text-regular">
							<slot :item="item" name="header"></slot>
						</p>
					</div>
					<div class="mt-1 flex">
						<div class="flex items-center text-sm text-text-lighter gap-3">
							<slot :item="item"></slot>
						</div>
					</div>
				</div>
			</div>
			<div class="ml-5 flex-shrink-0">
				<slot :item="item" name="buttons"></slot>
			</div>
		</div>
	</li>
</template>

<script setup lang="ts">
defineProps<{
  item: unknown
}>()
</script>
