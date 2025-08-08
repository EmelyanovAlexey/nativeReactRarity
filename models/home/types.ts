import { FilterOption } from "@/models/search/types";

// ТИПЫ
export type CardType = {
  id: number;
  rp: string;
  name: string | null;
  description: string;
  image: string;
  year_from: number | null;
  year_to: number | null;
  is_favourite: boolean;
};

export type CardDetailType = {
  id: number;
  name: string | null;
  description: string;
  image: string;
  date_from: string;
  date_to: string;
  is_favourite: boolean;
  country: string;
  region: string;
  city: string;
  manufacturer: string;
};

// МОДЕЛИ
export type PopularModel = {
  cards: CardType[];
  cardDetail: CardDetailType | null;
  page: number;
  limit: number;
  hasMore: boolean;
};

// ПАРАМЕТРЫ
export type getCardsFxParam = {
  regionName: FilterOption[];
  countryName: FilterOption[];
  manufacturerName: FilterOption[];
  photoUri?: string | null;
  symbolName: FilterOption[];
  page?: number;
  offset?: number;
};

export type getCardsPhotoFxParam = {
  regionName: FilterOption[];
  countryName: FilterOption[];
  manufacturerName: FilterOption[];
  photoUri: string;
  symbolName: FilterOption[];
  page?: number;
  offset?: number;
};
