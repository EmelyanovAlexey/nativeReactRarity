import { SearchModel, FilterOption, ManufacturersFilterOption } from "../types";

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
