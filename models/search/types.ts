import { CardType, CardDetailType } from "@/models/home/types";

// ТИПЫ
export type FilterRoot = {
  id: TypeFilter;
  name: string;
  select: FilterOption | null;
  options?: FilterOption[];
};

export type FilterOption = {
  id: number;
  name: string;
};

export enum TypeFilter {
  empty,
  country,
  area,
  city,
  manufacturer,
  symbol,
}

export type HistoryType = {
  id: number;
  region_name?: string;
  country_name?: string;
  manufacturer_name?: string;
  city_name?: string;
  text?: string;
  photo?: string;
  created_at: string;
};

export interface ManufacturersFilterOption extends FilterOption {
  cities: FilterOption[];
}

export type SearchParamType = {
  countries: string[];
  manufacturers: string[];
  symbols: string[];
};

// МОДЕЛИ
export interface SearchModel {
  isShowModal: boolean;
  isShowModalFilter: boolean;
  searchText: string;
  count: number | string | null;
  img: string | null;
  isBeenSearch: boolean;

  countries: FilterOption[];
  selectedCountries: FilterOption | null;

  regions: FilterOption[];
  selectedRegions: FilterOption | null;

  cities: FilterOption[];
  selectedCities: FilterOption | null;

  manufacturers: ManufacturersFilterOption[];
  selectedManufacturers: FilterOption | null;

  cards: CardType[];
  cardDetail: CardDetailType | null;

  selectedSymbol: FilterOption | null;

  paramsFilter: SearchParamType;

  page: number;
  limit: number;
  hasMore: boolean;
}

export interface SearchHistoryModel {
  histories: HistoryType[];
  historiesLater: HistoryType[];
}
