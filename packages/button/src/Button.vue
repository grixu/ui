<template>
  <button
    :disabled="disabled"
    :class="[css, disabled ? 'opacity-50 cursor-not-allowed' : '']"
    class="
      flex
      cursor-pointer
      group
      transition-all
      border border-transparent
      focus:outline-none
      mx-1
      font-medium font-base
      rounded-md
      items-center
      content-center
    "
    data-testid="button"
    @click.stop="emitClick"
  >
    <div v-if="withIcon" :class="{ 'mr-1': isText }" class="flex pt-0.5" data-testid="button-icon">
      <slot name="icon"></slot>
    </div>
    <div class="flex-auto">
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs, useSlots } from "vue"

interface ButtonProps {
  color?: "link" | "primary" | "success" | "danger" | "warning" | "info"
  disabled?: boolean
  withIcon?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: "link",
  disabled: false,
  withIcon: false,
})

const { color, disabled } = toRefs(props)

const css = computed(() => {
  const baseCommonCss = "px-3 py-2"

  switch (color.value) {
    case "link":
      return "focus:underline focus:text-primary hover:text-primary hover:underline"
    case "success":
      return (
        baseCommonCss +
        " bg-green-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:bg-green-700"
      )
    case "danger":
      return (
        baseCommonCss + " bg-red-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700"
      )
    case "info":
      return (
        baseCommonCss +
        " bg-white text-black border border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-100"
      )
    case "warning":
      return (
        baseCommonCss +
        " bg-yellow-600 text-white focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 hover:bg-yellow-700"
      )
    case "primary":
      return (
        baseCommonCss +
        " bg-primary text-white focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark hover:bg-primary-darker"
      )
    default:
      return color.value
  }
})

const slots = useSlots()
const isText = computed<boolean>(() => {
  return Object.keys(slots).includes("default")
})

const emit = defineEmits<{
  (e: "click"): void
}>()
const emitClick = () => {
  if (!disabled.value) emit("click")
}
</script>
