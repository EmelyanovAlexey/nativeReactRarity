import { createEvent } from "effector";

import { TypeFilter, FilterOption } from "../types";

export const resetSearchEvent = createEvent<void>();
export const resetSearchHistoryEvent = createEvent<void>();

export const setIsShowModalEvent = createEvent<boolean>();
export const setIsShowModalFilterEvent = createEvent<boolean>();
export const setSearchTextEvent = createEvent<string>();
export const setImgEvent = createEvent<string | null>();
export const resetFilterEvent = createEvent<void>();

export const setSelectOptionEvent = createEvent<{
  type: TypeFilter;
  option: FilterOption | null;
}>();

export const clearDetailCardEvent = createEvent<void>();
export const setIsBeenSearchEvent = createEvent<boolean>();
export const setPageEvent = createEvent<number>();
