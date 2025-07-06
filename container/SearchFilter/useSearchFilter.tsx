import { useUnit } from "effector-react";

import { TypeFilter } from "@/models/search/types";
import { $searchModel } from "@/models/search";
import {
  setIsShowModalEvent,
  setSearchTextEvent,
  setIsShowModalFilterEvent,
  setSelectOptionEvent,
  setPageEvent,
} from "@/models/search/events/events";
import { setActiveTabEvent } from "@/models/main/events/events";
import {
  getCardsFx,
  getCardsSearchPhotoFx,
} from "@/models/search/effects/effects";
import { ActiveTab } from "@/models/main/types";

export default function useBottomTabs() {
  const {
    searchText,
    selectedCountries,
    selectedRegions,
    selectedCities,
    selectedManufacturers,
    selectedSymbol,
    count,
    cards,
    img,
    isBeenSearch,
    limit,
  } = useUnit($searchModel);
  const isLoadingAI = useUnit(getCardsFx.pending);
  const isLoading = useUnit(getCardsFx.pending) || isLoadingAI;

  const listFilter = [
    {
      id: TypeFilter.symbol,
      select: selectedSymbol,
    },
    {
      id: TypeFilter.country,
      select: selectedCountries,
    },
    {
      id: TypeFilter.area,
      select: selectedRegions,
    },
    {
      id: TypeFilter.city,
      select: selectedCities,
    },
    {
      id: TypeFilter.manufacturer,
      select: selectedManufacturers,
    },
  ];

  const selectedFilter = listFilter.filter(
    (filterItem) => filterItem.select !== null
  );

  const isShowStart =
    searchText === "" &&
    selectedFilter.length === 0 &&
    cards.length == 0 &&
    !isLoading;

  const handleSearchFilter = () => {
    setIsShowModalEvent(true);
  };

  const handleDelete = (type: TypeFilter) => {
    setSelectOptionEvent({ type, option: null });
    setPageEvent(1);

    const param = {
      regionName: type === TypeFilter.area ? undefined : selectedRegions?.name,
      countryName:
        type === TypeFilter.country ? undefined : selectedCountries?.name,
      manufacturerName:
        type === TypeFilter.manufacturer
          ? undefined
          : selectedManufacturers?.name,
      symbolName: type === TypeFilter.symbol ? undefined : selectedSymbol?.name,
      page: 1,
      offset: limit,
    };

    if (img) {
      getCardsSearchPhotoFx({ ...param, photoUri: img.split(",")[1] });
      return;
    }

    getCardsFx(param);
  };

  const handleOpenFilter = () => {
    setIsShowModalFilterEvent(true);
  };

  const handleDeleteFilter = () => {
    setSearchTextEvent("");
  };

  const handleToHome = () => {
    setActiveTabEvent(ActiveTab.home);
  };

  return {
    textFilter: searchText,
    selectedFilter,
    isLoading,
    count,
    isShowStart,
    img,
    isBeenSearch,
    handleToHome,
    handleSearchFilter,
    handleDelete,
    handleOpenFilter,
    handleDeleteFilter,
  };
}
