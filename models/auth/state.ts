import { createEvent, createEffect, createStore } from "effector";

export const loginFx = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    // Пока заглушка — можно подключить API позже
    if (email === "test@example.com" && password === "123456") {
      return "mocked-jwt-token";
    }
    throw new Error("Неверный логин или пароль");
  }
);

export const registerFx = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    return "mocked-registered-token";
  }
);

export const logout = createEvent();

export const $token = createStore<string | null>(null)
  .on(loginFx.doneData, (_, token) => token)
  .on(registerFx.doneData, (_, token) => token)
  .reset(logout);

export const $isAuth = $token.map(Boolean);
