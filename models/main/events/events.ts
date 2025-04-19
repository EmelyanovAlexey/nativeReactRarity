import { createEvent } from "effector";
import { ActiveTab } from "../types";

export const resetMainEvent = createEvent<void>();

export const setActiveTabEvent = createEvent<ActiveTab>();
