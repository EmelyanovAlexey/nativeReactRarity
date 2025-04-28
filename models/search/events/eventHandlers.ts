import {SearchModel } from "../types";

export function setIsShowModalEventHandler(
  state: SearchModel,
  isShow: boolean
): SearchModel {
  return { ...state, isShowModal: isShow };
}

export function setIsShowModalFilterEventHandler(
  state: SearchModel,
  isShowFilter: boolean
): SearchModel {
  return { ...state, isShowModalFilter: isShowFilter };
}

export function setSearchTextEventHandler(
  state: SearchModel,
  text: string
): SearchModel {
  return { ...state, searchText: text };
}
