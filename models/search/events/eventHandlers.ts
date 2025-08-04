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
    return {
      ...state,
      selectedCountries:
        state.selectedCountries?.name === param.option?.name
          ? null
          : param.option,
    };
  }
  if (param.type === TypeFilter.area) {
    return {
      ...state,
      selectedRegions:
        state.selectedRegions?.name === param.option?.name
          ? null
          : param.option,
    };
  }
  if (param.type === TypeFilter.city) {
    return {
      ...state,
      selectedCities:
        state.selectedCities?.name === param.option?.name ? null : param.option,
    };
  }
  if (param.type === TypeFilter.manufacturer) {
    return {
      ...state,
      selectedManufacturers:
        state.selectedManufacturers?.name === param.option?.name
          ? null
          : param.option,
    };
  }
  if (param.type === TypeFilter.symbol) {
    return {
      ...state,
      selectedSymbol:
        state.selectedSymbol?.name === param.option?.name ? null : param.option,
    };
  }

  return { ...state };
}

export function clearDetailCardEventHandler(state: SearchModel): SearchModel {
  return { ...state, cardDetail: null };
}

export function setImgEventHandler(
  state: SearchModel,
  image: string | null
): SearchModel {
  return { ...state, img: image };
}

export function setIsBeenSearchEventHandler(
  state: SearchModel,
  param: boolean
): SearchModel {
  return { ...state, isBeenSearch: param };
}

export function setPageEventHandler(
  state: SearchModel,
  page: number
): SearchModel {
  return { ...state, page };
}

export function resetFilterEventHandler(state: SearchModel): SearchModel {
  return {
    ...state,
    selectedManufacturers: null,
    selectedCities: null,
    selectedRegions: null,
    selectedCountries: null,
  };
}
