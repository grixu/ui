import { ref } from "vue"

export function generateArray() {
  return new Array(1000).fill(1, 0, 1000).map(() => Math.round(Math.random() * 1000))
}

export function generateArrayRef() {
  return ref(generateArray())
}
