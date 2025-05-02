import { useUnit } from "effector-react";

import { $searchModel } from "@/models/search";
import { getCardsFx } from "@/models/search/effects/effects";
import {
  setIsShowModalEvent,
  setSearchTextEvent,
} from "@/models/search/events/events";

export default function useModalSearch() {
  const {
    isShowModal,
    searchText,
    selectedCountries,
    selectedRegions,
    selectedCities,
    selectedManufacturers,
  } = useUnit($searchModel);

  const setModalVisibleSearch = (param: boolean) => {
    getCardsFx({
      regionName: selectedCountries?.name,
      countryName: selectedRegions?.name,
      manufacturerName: selectedManufacturers?.name,
    });
    setIsShowModalEvent(param);
  };

  const onChangeSearchText = (value: string) => {
    setSearchTextEvent(value);
  };

  return {
    modalVisibleSearch: isShowModal,
    textFilter: searchText,
    setModalVisibleSearch,
    onChangeSearchText,
  };
}
