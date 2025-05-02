import { FavouritesModel } from "../types";
import { CardType, CardDetailType } from "@/models/home/types";

export function getCardsFxDoneHandler(
  state: FavouritesModel,
  data: CardType[]
): FavouritesModel {
  return { ...state, cards: data };
}

export function getCardsDetailFxDoneHandler(
  state: FavouritesModel,
  data: CardDetailType
): FavouritesModel {
  return { ...state, cardDetail: data };
}

export function setFavouriteFxDoneHandler(
  state: FavouritesModel,
  data: CardType
): FavouritesModel {
  return {
    ...state,
    cards: state.cards.map((card) => {
      if (card.id === data.id) {
        return { ...card, is_favourite: !card.is_favourite };
      }

      return card;
    }),
    cardDetail:
      state.cardDetail !== null
        ? { ...state.cardDetail, is_favourite: !state.cardDetail.is_favourite }
        : null,
  };
}
