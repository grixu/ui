<template>
	<div
		class="
			relative
			rounded-lg
			border border-gray
			hover:bg-background
			bg-white
			px-6
			py-4
			shadow-sm
			flex
			items-center
			space-x-3
			order-2
		"
		data-testid="list-item-grid"
	>
		<div class="flex-1 min-w-0">
			<div class="w-full flex items-center justify-between text-text-regular text-md font-semibold flex-21">
				<slot :item="item" name="header"></slot>
			</div>
			<p class="mt-1 text-base text-text-lighter">
				<slot :item="item"></slot>
			</p>
			<div class="mt-3 text-base text-text-lighter flex-2 justify-between items-center">
				<div class="flex items-center text-primary gap-3 text-lighter">
					<slot :item="item" name="avatar"></slot>
					<slot :item="item" name="details"></slot>
					<div class="ml-auto">
						<slot :item="item" name="buttons"></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
  item: unknown
}>()
</script>
