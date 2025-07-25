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
  getCardsLengthFxDoneHandler,
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
  getCardsLengthFx,
} from "./effects/effects";

import {
  setIsShowModalEventHandler,
  setSearchTextEventHandler,
  setIsShowModalFilterEventHandler,
  setSelectOptionEventHandler,
  clearDetailCardEventHandler,
  setImgEventHandler,
  setIsBeenSearchEventHandler,
  setPageEventHandler,
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
  setPageEvent,
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
  .on(setPageEvent, setPageEventHandler)

  .on(countriesFx.doneData, countriesFxDoneHandler)
  .on(regionsFx.doneData, regionsFxDoneHandler)
  .on(citiesFx.doneData, citiesFxDoneHandler)
  .on(manufacturersFx.doneData, manufacturersFxDoneHandler)
  .on(getCardsFx.doneData, getCardsFxDoneHandler)
  .on(getCardsSearchPhotoFx.doneData, getCardsFxDoneHandler)
  .on(getCardsDetailFx.doneData, getCardsDetailFxDoneHandler)
  .on(setFavouriteFx.doneData, setFavouriteFxDoneHandler)
  .on(getSearchFilterParamFx.doneData, getSearchFilterParamFxDoneHandler)
  .on(getCardsLengthFx.doneData, getCardsLengthFxDoneHandler)

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

sample({
  source: $searchModel,
  clock: [getCardsSearchPhotoFx.doneData, getCardsFx.doneData],
  fn: (searchModel) => {
    const {
      selectedCountries,
      selectedRegions,
      selectedCities,
      selectedManufacturers,
      selectedSymbol,
      img,
    } = searchModel;

    return {
      countryName: selectedCountries?.name ?? undefined,
      regionName: selectedRegions?.name ?? undefined,
      // citiesName: selectedCities?.name ?? undefined,
      manufacturerName: selectedManufacturers?.name ?? undefined,
      symbolName: selectedSymbol?.name ?? undefined,
      photoUri: img ?? "",
    };
  },
  target: getCardsLengthFx,
});
