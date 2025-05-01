import { createStore, sample } from "effector";

import { registerFx, loginFx } from "./effects/effects";
import {
  registerFxDoneHandler,
  loginFxDoneHandler,
} from "./effects/effectHandlers";
import { resetUserEvent, setErrorEvent } from "./events/events";
import { setErrorEventHandler } from "./events/eventHandlers";

import { USER_MODEL_DEFAULT } from "./constants";
import { UserModel } from "./types";

export const $userModel = createStore<UserModel>(USER_MODEL_DEFAULT)
  .on(setErrorEvent, setErrorEventHandler)

  .on(loginFx.doneData, loginFxDoneHandler)
  .on(registerFx.doneData, registerFxDoneHandler)
  .reset(resetUserEvent);
//   .reset(resetModelsOnLogoutEvent);

sample({
  clock: loginFx.failData,
  fn: (message: any) => {
    console.log(message);

    if (message) {
      return String(message);
    }

    return "errorAuth";
  },
  target: setErrorEvent,
});
