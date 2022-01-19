import { ComputedRef, Ref } from "vue";
export interface Paginator<T> {
    inputData: Ref<Array<T>>;
    data: ComputedRef<Array<T>>;
    isNextPage: ComputedRef<boolean>;
    isPrevPage: ComputedRef<boolean>;
    currentPage: ComputedRef<number>;
    currentItem: Ref<number>;
    totalItems: ComputedRef<number>;
    totalPages: ComputedRef<number>;
    perPage: Ref<number>;
    nextPage(): void;
    prevPage(): void;
}
export declare function paginate<T>(data: Array<T>, perPage: number, fromRecord?: number | undefined): Array<T>;
export declare function usePaginator<T>(inputData: Ref<Array<T>>, perPage: Ref<number>): Paginator<T>;
