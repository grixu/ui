import { MaybeRef } from "./types";
import { Ref } from "vue";
export default function <T>(id?: MaybeRef<T> | undefined): Ref<string>;
