import { createStore } from "effector";

// import { resetModelsOnLogoutEvent } from "../../applicationState/events";

// import { setActiveTabEventHandler } from "./events/eventHandlers";
import { resetPopularEvent } from "./events/events";
import { POPULAR_MODEL_DEFAULT } from "./constants";
import { PopularModel } from "./types";

export const $popularModel = createStore<PopularModel>(POPULAR_MODEL_DEFAULT)
  //   .on(setActiveTabEvent, setActiveTabEventHandler)
  .reset(resetPopularEvent);
//   .reset(resetModelsOnLogoutEvent);
