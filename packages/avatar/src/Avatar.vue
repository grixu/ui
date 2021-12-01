<template>
  <button
    :class="[
        text ? 'p-5 h-6 w-6' : 'h-10 w-10'
      ]"
    class="
    cursor-pointer focus:ring-2
      focus:ring-offset-4 focus:ring-primary ring-2 ring-offset-2
        bg-primary
        items-center
        justify-center
        text-white
        rounded-full
        flex
        text-sm
        ring-primary
        focus:outline-none focus:ring-primary
        hover:bg-primary
        transition-all
        my-1
      "
    data-testid="avatar-wrapper"
    @click="emitClick"
  >
    <span v-if="text" data-testid="avatar-text">{{ textInitials }}</span>
    <img
      v-else-if="img"
      :src="img"
      class="rounded-full h-full w-full"
      data-testid="avatar-image"
    />
    <slot v-else>
      <IconUser class="text-gray-100 outline-none" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue"
import IconUser from '~icons/heroicons-solid/user'

const props = defineProps<{
  text?: string
  img?: string
}>()

const { text } = toRefs(props)

const textInitials = computed<string>(() => {
  let textInitials = "";
  const fullText = text?.value?.split(" ") ?? [];

  fullText.forEach((item: string) => {
    const initials = item.charAt(0).toUpperCase();
    textInitials += initials;
  });
  return textInitials.slice(0, 3);
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
const emitClick = () => emit('click')
</script>
