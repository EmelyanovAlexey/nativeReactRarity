import {
  SearchModel,
  FilterOption,
  ManufacturersFilterOption,
  SearchHistoryModel,
  HistoryType,
} from "../types";
import { CardType, CardDetailType } from "@/models/home/types";

export function countriesFxDoneHandler(
  state: SearchModel,
  data: FilterOption[]
): SearchModel {
  return { ...state, countries: data };
}

export function regionsFxDoneHandler(
  state: SearchModel,
  data: FilterOption[]
): SearchModel {
  return { ...state, regions: data };
}

export function citiesFxDoneHandler(
  state: SearchModel,
  data: FilterOption[]
): SearchModel {
  return { ...state, cities: data };
}

export function manufacturersFxDoneHandler(
  state: SearchModel,
  data: ManufacturersFilterOption[]
): SearchModel {
  return { ...state, manufacturers: data };
}

export function getCardsFxDoneHandler(
  state: SearchModel,
  data: CardType[]
): SearchModel {
  console.log(data);
  debugger;
  return {
    ...state,
    cards: data,
    count: data.length > 0 ? data.length : null,
  };
}

export function getCardsDetailFxDoneHandler(
  state: SearchModel,
  data: CardDetailType
): SearchModel {
  return { ...state, cardDetail: data };
}

export function setFavouriteFxDoneHandler(
  state: SearchModel,
  data: CardType
): SearchModel {
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

export function getHistoryFilterFxDoneHandler(
  state: SearchHistoryModel,
  data: HistoryType[]
): SearchHistoryModel {
  const cueDate = new Date();
  cueDate.setDate(cueDate.getDate() - 7);

  return {
    ...state,
    histories: data.filter((history) => new Date(history.created_at) > cueDate),
    historiesLater: data.filter(
      (history) => new Date(history.created_at) <= cueDate
    ),
  };
}
