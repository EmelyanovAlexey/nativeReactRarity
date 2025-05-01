import { createStore } from "effector";

// import { resetModelsOnLogoutEvent } from "../../applicationState/events";

import {
  countriesFxDoneHandler,
  regionsFxDoneHandler,
  citiesFxDoneHandler,
  manufacturersFxDoneHandler,
} from "./effects/effectHandlers";
import {
  countriesFx,
  regionsFx,
  citiesFx,
  manufacturersFx,
} from "./effects/effects";

import {
  setIsShowModalEventHandler,
  setSearchTextEventHandler,
  setIsShowModalFilterEventHandler,
  setSelectOptionEventHandler,
} from "./events/eventHandlers";
import {
  resetSearchEvent,
  setIsShowModalEvent,
  setSearchTextEvent,
  setIsShowModalFilterEvent,
  setSelectOptionEvent,
} from "./events/events";
import { SEARCH_MODEL_DEFAULT } from "./constants";
import { SearchModel } from "./types";

export const $searchModel = createStore<SearchModel>(SEARCH_MODEL_DEFAULT)
  .on(setIsShowModalEvent, setIsShowModalEventHandler)
  .on(setSearchTextEvent, setSearchTextEventHandler)
  .on(setIsShowModalFilterEvent, setIsShowModalFilterEventHandler)
  .on(setSelectOptionEvent, setSelectOptionEventHandler)

  .on(countriesFx.doneData, countriesFxDoneHandler)
  .on(regionsFx.doneData, regionsFxDoneHandler)
  .on(citiesFx.doneData, citiesFxDoneHandler)
  .on(manufacturersFx.doneData, manufacturersFxDoneHandler)

  .reset(resetSearchEvent);
//   .reset(resetModelsOnLogoutEvent);
