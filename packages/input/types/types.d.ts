import { Ref } from "vue";
export declare type MaybeRef<T> = T | Ref<T>;
export declare enum InputTypesEnum {
    text = "text",
    email = "email",
    password = "password"
}
export declare type InputTypes = keyof typeof InputTypesEnum;
