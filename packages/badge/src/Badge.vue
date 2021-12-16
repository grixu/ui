<template>
  <div
    data-testid="badge-wrapper"
    :class="css"
    class="font-medium text-sm w-max text-center px-1.5 py-1 rounded-xl"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {UseVariant, useVariant} from "vue-use-variant"
import {variants} from "./variants";

interface BadgeProps {
  success?: boolean
  error?: boolean
  warning?: boolean
  info?: boolean
}

const props = defineProps<BadgeProps>()
const { defineVariant } = useVariant() as UseVariant

const css = defineVariant({...props}, variants)
</script>
