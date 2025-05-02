import { FavouritesModel } from "../types";

export function clearDetailCardEventHandler(
  state: FavouritesModel
): FavouritesModel {
  return { ...state, cardDetail: null };
}
