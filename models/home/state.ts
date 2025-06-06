import { createStore, sample } from "effector";

// import { resetModelsOnLogoutEvent } from "../../applicationState/events";

import {
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "./effects/effects";
import {
  getCardsFxDoneHandler,
  getCardsDetailFxDoneHandler,
  setFavouriteFxDoneHandler,
} from "./effects/effectHandlers";

import { resetPopularEvent, clearDetailCardEvent } from "./events/events";
import { clearDetailCardEventHandler } from "./events/eventHandlers";

import { POPULAR_MODEL_DEFAULT } from "./constants";
import { PopularModel } from "./types";

export const $popularModel = createStore<PopularModel>(POPULAR_MODEL_DEFAULT)
  .on(clearDetailCardEvent, clearDetailCardEventHandler)

  .on(getCardsFx.doneData, getCardsFxDoneHandler)
  .on(getCardsDetailFx.doneData, getCardsDetailFxDoneHandler)
  .on(setFavouriteFx.doneData, setFavouriteFxDoneHandler)
  .reset(resetPopularEvent);
//   .reset(resetModelsOnLogoutEvent);
