import { createStore, sample } from "effector";

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
  getSearchFilterParamFxDoneHandler,
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
  getSearchFilterParamFx,
} from "./effects/effects";

import {
  setIsShowModalEventHandler,
  setSearchTextEventHandler,
  setIsShowModalFilterEventHandler,
  setSelectOptionEventHandler,
  clearDetailCardEventHandler,
  setImgEventHandler,
  setIsBeenSearchEventHandler,
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
  setIsBeenSearchEvent,
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
  .on(setIsBeenSearchEvent, setIsBeenSearchEventHandler)

  .on(countriesFx.doneData, countriesFxDoneHandler)
  .on(regionsFx.doneData, regionsFxDoneHandler)
  .on(citiesFx.doneData, citiesFxDoneHandler)
  .on(manufacturersFx.doneData, manufacturersFxDoneHandler)
  .on(getCardsFx.doneData, getCardsFxDoneHandler)
  .on(getCardsSearchPhotoFx.doneData, getCardsFxDoneHandler)
  .on(getCardsDetailFx.doneData, getCardsDetailFxDoneHandler)
  .on(setFavouriteFx.doneData, setFavouriteFxDoneHandler)
  .on(getSearchFilterParamFx.doneData, getSearchFilterParamFxDoneHandler)

  .reset(resetSearchEvent);
//   .reset(resetModelsOnLogoutEvent);

export const $searchHistoryModel = createStore<SearchHistoryModel>(
  SEARCH_HISTORY_MODEL_DEFAULT
)
  .on(getHistoryFilterFx.doneData, getHistoryFilterFxDoneHandler)
  .reset(resetSearchHistoryEvent);


sample({
	clock: [getCardsSearchPhotoFx.doneData, getCardsFx.doneData],
	fn: () => true,
	target: [setIsBeenSearchEvent],
});