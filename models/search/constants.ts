import { SearchModel, SearchHistoryModel } from "./types";

export const SEARCH_MODEL_DEFAULT: SearchModel = {
  isShowModal: false,
  isShowModalFilter: false,
  searchText: "",
  count: null,
  img: null,
  isBeenSearch: false,

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

  selectedSymbol: null,

  paramsFilter: {
    countries: [],
    manufacturers:[],
    symbols: [],
  },

  page: 1,
  limit: 40,
  hasMore: true,
};

export const SEARCH_HISTORY_MODEL_DEFAULT: SearchHistoryModel = {
  histories: [],
  historiesLater: [],
};
