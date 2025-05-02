import { createStore } from "effector";

// import { resetModelsOnLogoutEvent } from "../../applicationState/events";

import {
  countriesFxDoneHandler,
  regionsFxDoneHandler,
  citiesFxDoneHandler,
  manufacturersFxDoneHandler,
  getCardsFxDoneHandler,
  getCardsDetailFxDoneHandler,
  setFavouriteFxDoneHandler,
} from "./effects/effectHandlers";
import {
  countriesFx,
  regionsFx,
  citiesFx,
  manufacturersFx,
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "./effects/effects";

import {
  setIsShowModalEventHandler,
  setSearchTextEventHandler,
  setIsShowModalFilterEventHandler,
  setSelectOptionEventHandler,
  clearDetailCardEventHandler,
} from "./events/eventHandlers";
import {
  resetSearchEvent,
  setIsShowModalEvent,
  setSearchTextEvent,
  setIsShowModalFilterEvent,
  setSelectOptionEvent,
  clearDetailCardEvent,
} from "./events/events";
import { SEARCH_MODEL_DEFAULT } from "./constants";
import { SearchModel } from "./types";

export const $searchModel = createStore<SearchModel>(SEARCH_MODEL_DEFAULT)
  .on(setIsShowModalEvent, setIsShowModalEventHandler)
  .on(setSearchTextEvent, setSearchTextEventHandler)
  .on(setIsShowModalFilterEvent, setIsShowModalFilterEventHandler)
  .on(setSelectOptionEvent, setSelectOptionEventHandler)
  .on(clearDetailCardEvent, clearDetailCardEventHandler)

  .on(countriesFx.doneData, countriesFxDoneHandler)
  .on(regionsFx.doneData, regionsFxDoneHandler)
  .on(citiesFx.doneData, citiesFxDoneHandler)
  .on(manufacturersFx.doneData, manufacturersFxDoneHandler)
  .on(getCardsFx.doneData, getCardsFxDoneHandler)
  .on(getCardsDetailFx.doneData, getCardsDetailFxDoneHandler)
  .on(setFavouriteFx.doneData, setFavouriteFxDoneHandler)

  .reset(resetSearchEvent);
//   .reset(resetModelsOnLogoutEvent);
