import { InputTypes, InputTypesEnum } from "./types"
import { Ref } from "vue"

export default function (type: Ref<InputTypes>) {
  if (Object.keys(InputTypesEnum).includes(type.value)) {
    return true
  }

  throw new Error("Improper field type: " + type.value)
}
