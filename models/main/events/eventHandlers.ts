import { MainModel, ActiveTab } from "../types";

export function setActiveTabEventHandler(
  state: MainModel,
  tab: ActiveTab
): MainModel {
  return { ...state, activeTab: tab };
}
