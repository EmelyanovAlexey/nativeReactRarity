import { createStore, sample } from "effector";

// import { resetModelsOnLogoutEvent } from "../../applicationState/events";

import {
  getCardsFavouritesFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "./effects/effects";
import {
  getCardsFxDoneHandler,
  getCardsDetailFxDoneHandler,
  setFavouriteFxDoneHandler,
} from "./effects/effectHandlers";

import {
  resetPopularEvent,
  clearDetailCardEvent,
  setCardEvent,
} from "./events/events";
import {
  clearDetailCardEventHandler,
  setCardEventHandler,
} from "./events/eventHandlers";

import { FAVOURITES_MODEL_DEFAULT } from "./constants";
import { FavouritesModel } from "./types";

export const $favouritesModel = createStore<FavouritesModel>(
  FAVOURITES_MODEL_DEFAULT
)
  .on(clearDetailCardEvent, clearDetailCardEventHandler)
  .on(setCardEvent, setCardEventHandler)

  .on(getCardsFavouritesFx.doneData, getCardsFxDoneHandler)
  .on(getCardsDetailFx.doneData, getCardsDetailFxDoneHandler)
  .on(setFavouriteFx.doneData, setFavouriteFxDoneHandler)
  .reset(resetPopularEvent);
//   .reset(resetModelsOnLogoutEvent);
