import { PopularModel, CardType, CardDetailType } from "../types";

export function getCardsFxDoneHandler(
  state: PopularModel,
  data: CardType[]
): PopularModel {
  return { ...state, cards: data };
}

export function getCardsDetailFxDoneHandler(
  state: PopularModel,
  data: CardDetailType
): PopularModel {
  return { ...state, cardDetail: data };
}
