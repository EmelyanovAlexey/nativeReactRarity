import { useUnit } from "effector-react";

import { TypeFilter } from "@/models/search/types";
import { $searchModel } from "@/models/search";
import {
  setIsShowModalEvent,
  setSearchTextEvent,
  setIsShowModalFilterEvent,
  setSelectOptionEvent,
} from "@/models/search/events/events";
import { getCardsFx } from "@/models/search/effects/effects";

export default function useBottomTabs() {
  const {
    searchText,
    selectedCountries,
    selectedRegions,
    selectedCities,
    selectedManufacturers,
    count,
    cards,
    img,
  } = useUnit($searchModel);
  const isLoading = useUnit(getCardsFx.pending);

  const listFilter = [
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
  };

  const handleOpenFilter = () => {
    setIsShowModalFilterEvent(true);
  };

  const handleDeleteFilter = () => {
    setSearchTextEvent("");
  };

  return {
    textFilter: searchText,
    selectedFilter,
    isLoading,
    count,
    isShowStart,
    img,
    handleSearchFilter,
    handleDelete,
    handleOpenFilter,
    handleDeleteFilter,
  };
}
