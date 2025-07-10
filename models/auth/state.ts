import { createStore, sample } from "effector";

import { registerFx, loginFx } from "./effects/effects";
import {
  registerFxDoneHandler,
  loginFxDoneHandler,
} from "./effects/effectHandlers";
import { resetUserEvent, setErrorEvent, setTokenEvent } from "./events/events";
import { setErrorEventHandler, setTokenEventHandler, } from "./events/eventHandlers";

import { USER_MODEL_DEFAULT } from "./constants";
import { UserModel } from "./types";

export const $userModel = createStore<UserModel>(USER_MODEL_DEFAULT)
  .on(setErrorEvent, setErrorEventHandler)
  .on(setTokenEvent, setTokenEventHandler)

  .on(loginFx.doneData, loginFxDoneHandler)
  .on(registerFx.doneData, registerFxDoneHandler)
  .reset(resetUserEvent);
//   .reset(resetModelsOnLogoutEvent);

sample({
  clock: loginFx.failData,
  fn: (message: any) => {
    if (message) {
      return String(message);
    }

    return "errorAuth";
  },
  target: setErrorEvent,
});

sample({
  clock: registerFx.failData,
  fn: (message: any) => {
    if (message) {
      return String(message);
    }

    return "errorRegister";
  },
  target: setErrorEvent,
});
