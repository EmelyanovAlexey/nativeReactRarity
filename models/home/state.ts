import { createStore, sample } from "effector";

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

import { resetPopularEvent, clearDetailCardEvent, setPageEvent } from "./events/events";
import { clearDetailCardEventHandler, setPageEventHandler } from "./events/eventHandlers";

import { POPULAR_MODEL_DEFAULT } from "./constants";
import { PopularModel } from "./types";

export const $homeModel = createStore<PopularModel>(POPULAR_MODEL_DEFAULT)
  .on(clearDetailCardEvent, clearDetailCardEventHandler)
  .on(setPageEvent, setPageEventHandler)

  .on(getCardsFx.doneData, getCardsFxDoneHandler)
  .on(getCardsDetailFx.doneData, getCardsDetailFxDoneHandler)
  .on(setFavouriteFx.doneData, setFavouriteFxDoneHandler)
  .reset(resetPopularEvent);
//   .reset(resetModelsOnLogoutEvent);
