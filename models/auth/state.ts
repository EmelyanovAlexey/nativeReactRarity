import { createEvent, createEffect, createStore } from "effector";

import { registerFx } from "./effects/effects";
import { registerFxDoneHandler } from "./effects/effectHandlers";
import { resetUserEvent } from "./events/events";

import { USER_MODEL_DEFAULT } from "./constants";
import { UserModel } from "./types";

export const loginFx = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    // Пока заглушка — можно подключить API позже
    if (email === "test@example.com" && password === "123456") {
      return "mocked-jwt-token";
    }
    throw new Error("Неверный логин или пароль");
  }
);

export const logout = createEvent();

export const $token = createStore<string | null>(null)
  .on(loginFx.doneData, (_, token) => token)

  .reset(logout);

export const $userModel = createStore<UserModel>(USER_MODEL_DEFAULT)
  .on(registerFx.doneData, registerFxDoneHandler)
  .reset(resetUserEvent);
//   .reset(resetModelsOnLogoutEvent);

export const $isAuth = $token.map(Boolean);
