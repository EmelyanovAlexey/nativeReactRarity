import { createStore } from "effector";

// import { resetModelsOnLogoutEvent } from "../../applicationState/events";

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
  .reset(resetSearchEvent);
//   .reset(resetModelsOnLogoutEvent);
