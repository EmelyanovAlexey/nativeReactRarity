import { createEvent } from "effector";

export const resetUserEvent = createEvent<void>();
export const setErrorEvent = createEvent<string>();
export const setTokenEvent = createEvent<{
  token: string;
  isYandex: boolean;
}>();
export const setUserEvent = createEvent<{ email: string; name: string }>();
