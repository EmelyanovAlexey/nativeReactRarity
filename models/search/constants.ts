import { SearchModel, TypeFilter, FilterRoot } from "./types";

export const SEARCH_MODEL_DEFAULT: SearchModel = {
  isShowModal: false,
  isShowModalFilter: false,
  searchText: "",

  countries: [
    {
      id: 1,
      name: "Германия",
    },
    {
      id: 2,
      name: "Россия",
    },
    {
      id: 3,
      name: "Польша",
    },
  ],
  selectedCountries: null,

  regions: [
    {
      id: 1,
      name: "Германия обл",
    },
    {
      id: 2,
      name: "Московская обл",
    },
    {
      id: 3,
      name: "ко там обл",
    },
  ],
  selectedRegions: null,

  cities: [
    {
      id: 1,
      name: "Новосибирск",
    },
    {
      id: 2,
      name: "Корелия",
    },
    {
      id: 3,
      name: "Искитим",
    },
  ],
  selectedCities: null,

  manufacturers: [],
  selectedManufacturers: null,
};
