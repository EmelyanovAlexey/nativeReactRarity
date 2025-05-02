import { FavouritesModel } from "../types";

export function clearDetailCardEventHandler(
  state: FavouritesModel
): FavouritesModel {
  return { ...state, cardDetail: null };
}

export function setCardEventHandler(
  state: FavouritesModel,
  id: number
): FavouritesModel {
  return { ...state, cards: state.cards.filter((card) => card.id !== id) };
}
