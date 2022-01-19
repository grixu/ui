import { allowedComponents, isArrayNotEmpty, isAllowedComponent } from "./utilities";
import { PropType } from "vue";
export declare type ListWrapperComponent = keyof typeof allowedComponents;
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<unknown[]>;
        required: true;
        validator: typeof isArrayNotEmpty;
    };
    layout: {
        type: PropType<string | number>;
        required: true;
        validator: typeof isAllowedComponent;
    };
    perPage: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    component: import("vue").ComputedRef<import("vue").DefineComponent<{
        item: {
            type: PropType<unknown>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: PropType<unknown>;
            required: true;
        };
    }>>, {}> | import("vue").DefineComponent<{
        item: {
            type: PropType<unknown>;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: {
            type: PropType<unknown>;
            required: true;
        };
    }>>, {}>>;
    css: import("vue").ComputedRef<string>;
    paginator: import("@grixu/paginator").Paginator<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<unknown[]>;
        required: true;
        validator: typeof isArrayNotEmpty;
    };
    layout: {
        type: PropType<string | number>;
        required: true;
        validator: typeof isAllowedComponent;
    };
    perPage: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    perPage: number;
}>;
export default _default;
