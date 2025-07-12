import { createEvent } from "effector";

export const resetUserEvent = createEvent<void>();
export const setErrorEvent = createEvent<string>();
export const setTokenEvent = createEvent<string>();
export const setUserEvent = createEvent<{ email: string; name: string }>();
