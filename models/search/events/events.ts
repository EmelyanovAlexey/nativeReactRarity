import { createEvent } from "effector";

import { SearchModel, TypeFilter, FilterOption } from "../types";

export const resetSearchEvent = createEvent<void>();

export const setIsShowModalEvent = createEvent<boolean>();
export const setIsShowModalFilterEvent = createEvent<boolean>();
export const setSearchTextEvent = createEvent<string>();

export const setSelectOptionEvent = createEvent<{
  type: TypeFilter;
  option: FilterOption | null;
}>();

export const clearDetailCardEvent = createEvent<void>();
