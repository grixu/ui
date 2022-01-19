interface ButtonProps {
    link?: boolean;
    primary?: boolean;
    success?: boolean;
    danger?: boolean;
    warning?: boolean;
    info?: boolean;
    disabled?: boolean;
    withIcon?: boolean;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    withIcon: boolean;
    primary: boolean;
    success: boolean;
    danger: boolean;
    warning: boolean;
    info: boolean;
    link: boolean;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    withIcon: boolean;
    primary: boolean;
    success: boolean;
    danger: boolean;
    warning: boolean;
    info: boolean;
    link: boolean;
    disabled: boolean;
}>>> & {
    onClick?: (() => any) | undefined;
}, {
    link: boolean;
    primary: boolean;
    success: boolean;
    danger: boolean;
    warning: boolean;
    info: boolean;
    disabled: boolean;
    withIcon: boolean;
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
