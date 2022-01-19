import { Ref } from "vue"

export type MaybeRef<T> = T | Ref<T>

export enum InputTypesEnum {
  text = "text",
  email = "email",
  password = "password",
}

export type InputTypes = keyof typeof InputTypesEnum
