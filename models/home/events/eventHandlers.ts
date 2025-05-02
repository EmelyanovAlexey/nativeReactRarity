import { PopularModel } from "../types";

export function clearDetailCardEventHandler(state: PopularModel): PopularModel {
  return { ...state, cardDetail: null };
}
