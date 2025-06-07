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
  getHistoryFilterFxDoneHandler,
} from "./effects/effectHandlers";
import {
  countriesFx,
  regionsFx,
  citiesFx,
  manufacturersFx,
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
  getHistoryFilterFx,
  getCardsSearchPhotoFx,
} from "./effects/effects";

import {
  setIsShowModalEventHandler,
  setSearchTextEventHandler,
  setIsShowModalFilterEventHandler,
  setSelectOptionEventHandler,
  clearDetailCardEventHandler,
  setImgEventHandler,
} from "./events/eventHandlers";
import {
  resetSearchEvent,
  setIsShowModalEvent,
  setSearchTextEvent,
  setIsShowModalFilterEvent,
  setSelectOptionEvent,
  clearDetailCardEvent,
  setImgEvent,
  resetSearchHistoryEvent,
} from "./events/events";
import {
  SEARCH_MODEL_DEFAULT,
  SEARCH_HISTORY_MODEL_DEFAULT,
} from "./constants";
import { SearchModel, SearchHistoryModel } from "./types";

export const $searchModel = createStore<SearchModel>(SEARCH_MODEL_DEFAULT)
  .on(setIsShowModalEvent, setIsShowModalEventHandler)
  .on(setSearchTextEvent, setSearchTextEventHandler)
  .on(setIsShowModalFilterEvent, setIsShowModalFilterEventHandler)
  .on(setSelectOptionEvent, setSelectOptionEventHandler)
  .on(clearDetailCardEvent, clearDetailCardEventHandler)
  .on(setImgEvent, setImgEventHandler)

  .on(countriesFx.doneData, countriesFxDoneHandler)
  .on(regionsFx.doneData, regionsFxDoneHandler)
  .on(citiesFx.doneData, citiesFxDoneHandler)
  .on(manufacturersFx.doneData, manufacturersFxDoneHandler)
  .on(getCardsFx.doneData, getCardsFxDoneHandler)
  .on(getCardsSearchPhotoFx.doneData, getCardsFxDoneHandler)
  .on(getCardsDetailFx.doneData, getCardsDetailFxDoneHandler)
  .on(setFavouriteFx.doneData, setFavouriteFxDoneHandler)

  .reset(resetSearchEvent);
//   .reset(resetModelsOnLogoutEvent);

export const $searchHistoryModel = createStore<SearchHistoryModel>(
  SEARCH_HISTORY_MODEL_DEFAULT
)
  .on(getHistoryFilterFx.doneData, getHistoryFilterFxDoneHandler)
  .reset(resetSearchHistoryEvent);
