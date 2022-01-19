import { InputTypes } from "./types";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    type: InputTypes;
    modelValue?: string | undefined;
    id?: string | undefined;
    fieldName?: string | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helpText?: string | undefined;
    cornerHint?: string | undefined;
    keyShortcut?: string | undefined;
}>, {
    id: undefined;
    fieldName: undefined;
    label: undefined;
    modelValue: string;
    placeholder: string;
    helpText: undefined;
    cornerHint: undefined;
    keyShortcut: undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    type: InputTypes;
    modelValue?: string | undefined;
    id?: string | undefined;
    fieldName?: string | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helpText?: string | undefined;
    cornerHint?: string | undefined;
    keyShortcut?: string | undefined;
}>, {
    id: undefined;
    fieldName: undefined;
    label: undefined;
    modelValue: string;
    placeholder: string;
    helpText: undefined;
    cornerHint: undefined;
    keyShortcut: undefined;
}>>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    modelValue: string;
    id: string;
    fieldName: string;
    label: string;
    placeholder: string;
    helpText: string;
    cornerHint: string;
    keyShortcut: string;
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof P]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
