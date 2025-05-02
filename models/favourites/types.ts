import { CardType, CardDetailType } from "@/models/home/types";
// ТИПЫ

// МОДЕЛИ
export type FavouritesModel = {
  cards: CardType[];
  cardDetail: CardDetailType | null;
  page: number;
};

// ПАРАМЕТРЫ
