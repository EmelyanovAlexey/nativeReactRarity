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
}

export interface ManufacturersFilterOption extends FilterOption {
  cities: FilterOption[];
}

// МОДЕЛИ
export interface SearchModel {
  isShowModal: boolean;
  isShowModalFilter: boolean;
  searchText: string;
  count: number | null;

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
}
