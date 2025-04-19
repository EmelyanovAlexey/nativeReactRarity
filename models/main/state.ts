import { createStore } from "effector";

// import { resetModelsOnLogoutEvent } from "../../applicationState/events";

import { setActiveTabEventHandler } from "./events/eventHandlers";
import { resetMainEvent, setActiveTabEvent } from "./events/events";
import { MAIN_MODEL_DEFAULT } from "./constants";
import { MainModel } from "./types";

export const $mainModel = createStore<MainModel>(MAIN_MODEL_DEFAULT)
  .on(setActiveTabEvent, setActiveTabEventHandler)
  .reset(resetMainEvent);
//   .reset(resetModelsOnLogoutEvent);
