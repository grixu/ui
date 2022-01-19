<template>
  <button :disabled="disabled" :class="css" data-testid="button" @click.stop="emitClick">
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
import { variantsDefaults, variants } from "./variants"
import { UseVariant, useVariant } from "vue-use-variant"

interface ButtonProps {
  link?: boolean
  primary?: boolean
  success?: boolean
  danger?: boolean
  warning?: boolean
  info?: boolean
  disabled?: boolean
  withIcon?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  ...variantsDefaults,
  withIcon: false,
})

const { defineVariant } = useVariant() as UseVariant
const css = defineVariant({ default: true, ...props }, variants)

const slots = useSlots()
const isText = computed<boolean>(() => {
  return Object.keys(slots).includes("default")
})

const emit = defineEmits<{
  (e: "click"): void
}>()
const { disabled } = toRefs(props)
const emitClick = () => {
  if (!disabled.value) emit("click")
}
</script>
