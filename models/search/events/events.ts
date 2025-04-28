import { createEvent } from "effector";

export const resetSearchEvent = createEvent<void>();

export const setIsShowModalEvent = createEvent<boolean>();
export const setIsShowModalFilterEvent = createEvent<boolean>();
export const setSearchTextEvent = createEvent<string>();
