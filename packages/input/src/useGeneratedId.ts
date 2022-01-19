import { MaybeRef } from "./types"
import { isRef, Ref, ref, UnwrapRef } from "vue"
import { v4 } from "uuid"

export default function <T>(id: MaybeRef<T> | undefined = undefined): Ref<string> {
  if (typeof id !== "undefined") {
    const innerId: Ref<T> | Ref<UnwrapRef<T>> = isRef(id) ? id : ref<T>(id)

    const checkIsString = (test: Ref<unknown>): test is Ref<string> => typeof test.value === "string"
    if (checkIsString(innerId) && innerId.value.length > 0) {
      return innerId
    }
  }

  return ref(v4())
}
