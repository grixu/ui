import ItemGrid from "./ItemGrid.vue";
import ItemStacked from "./ItemStacked.vue";
export interface ListWrapperComponents {
    [index: string]: {
        comp: typeof ItemGrid | typeof ItemStacked;
        css?: string;
    };
}
export interface DescriptionRecord {
    label: string;
    content: any;
}
export declare type DescriptionEntry = Record<string, DescriptionEntryValue>;
export declare type DescriptionEntryValue = string | number | boolean | DescriptionRecord;
