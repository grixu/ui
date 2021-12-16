<template>
  <transition
    appear
    class='transform transition'
    enter-active-class='ease-in duration-300'
    enter-class=' opacity-0 scale-50'
    enter-to-class='opacity-100 scale-100'
    leave-active-class='ease-out duration-300'
    leave-class='opacity-100 scale-100'
    leave-to-class='opacity-0 scale-50'
  >
    <div ref='slideoverRef' class='flex absolute inset-0' tabindex='0' data-testid='slideover' @keydown.esc='close'>
      <div class='h-screen w-1/12 sm:w-1/4 md:w-1/2 lg:w-3/5 xl:w-4/6 bg-gray-dark' @click='close'></div>
      <div class='relative h-screen w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/6 bg-white'>
        <div class='w-full h-20 bg-primary px-6 flex items-center justify-between'>
          <h1 class='text-white text-xl'>
            <slot name='title'></slot>
          </h1>
          <Button v-if='closeIcon' with-icon data-testid='close-button' class="text-white" @click='close'>
            <template #icon>
              <IconClose class='w-6 h-6' />
            </template>
          </Button>
        </div>
        <div class='w-full p-6'>
          <slot></slot>
        </div>
        <div class='absolute bottom-0 w-full h-20 flex justify-end pr-6 items-center border border-gray-200 py-4'
             data-testid='actions-slot-wrapper'>
          <slot name='actions' :close="close">
            <Button class='p-2 text-md text-color' @click='close'>Anuluj</Button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang='ts'>
import Button from '@grixu/button'
import IconClose from '~icons/heroicons-solid/x'
import {nextTick, onMounted, ref} from 'vue'

const props = withDefaults(defineProps<{
  closeIcon?: boolean
}>(), {
  closeIcon: true
})

const emit = defineEmits<{
  (e: 'close'): void
}>()
const close = () => emit('close')

const slideoverRef = ref<HTMLElement>()
onMounted(() => nextTick(() => slideoverRef.value?.focus()))

</script>
