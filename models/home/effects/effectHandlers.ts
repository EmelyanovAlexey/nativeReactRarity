import { PopularModel, CardType, CardDetailType } from "../types";

export function getCardsFxDoneHandler(
  state: PopularModel,
  data: CardType[]
): PopularModel {

  let allCard = data;

  if (state.page > 1) {
    allCard = state.cards.concat(data)
  }

  if (data.length < state.limit) {
    return { ...state, cards: allCard, hasMore: false };
  }

  return { ...state, cards: allCard, hasMore: true };
}

export function getCardsDetailFxDoneHandler(
  state: PopularModel,
  data: CardDetailType
): PopularModel {
  return { ...state, cardDetail: data };
}

export function setFavouriteFxDoneHandler(
  state: PopularModel,
  data: CardType
): PopularModel {
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
