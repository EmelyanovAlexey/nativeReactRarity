import { SearchModel, SearchHistoryModel } from "./types";

export const SEARCH_MODEL_DEFAULT: SearchModel = {
  isShowModal: false,
  isShowModalFilter: false,
  searchText: "",
  count: null,
  img: null,
  isBeenSearch: false,

  countries: [],
  selectedCountries: [],

  regions: [],
  selectedRegions: [],

  cities: [],
  selectedCities: [],

  manufacturers: [],
  manufacturersAll: [],
  selectedManufacturers: [],

  cards: [],
  cardDetail: null,

  selectedSymbol: [],

  paramsFilter: {
    countries: [],
    manufacturers: [],
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
