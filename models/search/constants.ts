import { SearchModel, TypeFilter, FilterRoot } from "./types";

export const SEARCH_MODEL_DEFAULT: SearchModel = {
  isShowModal: false,
  isShowModalFilter: false,
  searchText: "",
  count: null,

  countries: [
    {
      id: 1,
      name: "Германия",
    },
  ],
  selectedCountries: null,

  regions: [
    {
      id: 1,
      name: "Германия обл",
    },
  ],
  selectedRegions: null,

  cities: [
    {
      id: 1,
      name: "Новосибирск",
    },
  ],
  selectedCities: null,

  manufacturers: [],
  selectedManufacturers: null,

  cards: [],
  cardDetail: null,
};
