import { SearchModel, TypeFilter, FilterOption } from "../types";

export function setIsShowModalEventHandler(
  state: SearchModel,
  isShow: boolean
): SearchModel {
  return { ...state, isShowModal: isShow };
}

export function setIsShowModalFilterEventHandler(
  state: SearchModel,
  isShowFilter: boolean
): SearchModel {
  return { ...state, isShowModalFilter: isShowFilter };
}

export function setSearchTextEventHandler(
  state: SearchModel,
  text: string
): SearchModel {
  return { ...state, searchText: text };
}

export function setSelectOptionEventHandler(
  state: SearchModel,
  param: {
    type: TypeFilter;
    option: FilterOption | null;
  }
): SearchModel {
  if (param.type === TypeFilter.country) {
    return { ...state, selectedCountries: param.option };
  }
  if (param.type === TypeFilter.area) {
    return { ...state, selectedRegions: param.option };
  }
  if (param.type === TypeFilter.city) {
    return { ...state, selectedCities: param.option };
  }
  if (param.type === TypeFilter.manufacturer) {
    return { ...state, selectedManufacturers: param.option };
  }

  return { ...state };
}
