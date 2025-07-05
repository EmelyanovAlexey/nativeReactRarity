import { PopularModel } from "../types";

export function clearDetailCardEventHandler(state: PopularModel): PopularModel {
  return { ...state, cardDetail: null };
}


export function setPageEventHandler(state: PopularModel, page: number): PopularModel {
  return { ...state, page };
}