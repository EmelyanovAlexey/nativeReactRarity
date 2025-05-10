import { SearchModel, SearchHistoryModel } from "./types";

export const SEARCH_MODEL_DEFAULT: SearchModel = {
  isShowModal: false,
  isShowModalFilter: false,
  searchText: "",
  count: null,
  img: null,

  countries: [],
  selectedCountries: null,

  regions: [],
  selectedRegions: null,

  cities: [],
  selectedCities: null,

  manufacturers: [],
  selectedManufacturers: null,

  cards: [],
  cardDetail: null,
};

export const SEARCH_HISTORY_MODEL_DEFAULT: SearchHistoryModel = {
  histories: [],
  historiesLater: [],
};
