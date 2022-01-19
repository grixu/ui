<template>
  <div>
    <div v-if="label || cornerHint" class="flex justify-between">
      <label v-if="label" class="block text-sm font-medium text-gray-700" :for="innerId" data-testid="base-input-label">
        {{ label }}
      </label>
      <div v-else class="block"></div>
      <span
        v-if="cornerHint"
        :id="`${innerId}-corner-hint`"
        class="text-sm text-gray-500"
        data-testid="base-input-corner-hint">
        {{ cornerHint }}
      </span>
    </div>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        v-if="isLeadingIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center"
        data-testid="base-input-leading-icon">
        <slot name="leading-icon" />
      </div>
      <input
        :id="innerId"
        v-bind="attrs"
        v-model="innerValue"
        data-testid="base-input"
        :aria-describedby="`${innerId}-description`"
        class="block w-full sm:text-sm rounded-md"
        :class="{
          'pl-10': isLeadingIcon,
          'pr-10': isTrailingIcon,
        }"
        :name="innerFieldName"
        :placeholder="placeholder"
        :type="type" />
      <div
        v-if="isTrailingIcon"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        data-testid="base-input-trailing-icon">
        <slot name="trailing-icon" />
      </div>
      <div v-if="keyShortcut" class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd
          class="
            inline-flex
            items-center
            border border-gray-200
            rounded
            px-2
            text-sm
            font-sans font-medium
            text-gray-400
          "
          data-testid="base-input-key-shortcut"
          >{{ keyShortcut }}</kbd
        >
      </div>
    </div>
    <p
      v-if="helpText || isHelpTextSlot"
      :id="`${innerId}-description`"
      class="mt-2 text-sm text-gray-500"
      data-testid="base-input-help-text">
      <slot v-if="!helpText" name="help-text" />
      {{ helpText }}
    </p>
    <p v-if="isErrors" :id="`${id}-error`" class="mt-2 text-sm text-red-600" data-test-id="base-input-errors">
      <slot name="errors" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, useAttrs, useSlots, withDefaults } from "vue"
import useGeneratedId from "./useGeneratedId"
import { InputTypes } from "./types"
import validateInputType from "./validateInputType"
import { useVModel } from "@vueuse/core"

const props = withDefaults(
  defineProps<{
    type: InputTypes
    modelValue?: string
    id?: string
    fieldName?: string
    label?: string
    placeholder?: string
    helpText?: string
    cornerHint?: string
    keyShortcut?: string
  }>(),
  {
    id: undefined,
    fieldName: undefined,
    label: undefined,
    modelValue: "",
    placeholder: "",
    helpText: undefined,
    cornerHint: undefined,
    keyShortcut: undefined,
  }
)

const { id, fieldName, type } = toRefs(props)
validateInputType(type)

const innerId = useGeneratedId(id)
const innerFieldName = computed(() => {
  if (fieldName.value) return fieldName.value

  return innerId.value
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
const innerValue = useVModel(props, "modelValue", emit)

const attrs = useAttrs()

const slots = useSlots()
const isLeadingIcon = computed(() => Object.keys(slots).includes("leading-icon"))
const isTrailingIcon = computed(() => Object.keys(slots).includes("trailing-icon"))
const isHelpTextSlot = computed(() => Object.keys(slots).includes("help-text"))
const isErrors = computed(() => Object.keys(slots).includes("errors"))
</script>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  inheritAttrs: false,
})
</script>
