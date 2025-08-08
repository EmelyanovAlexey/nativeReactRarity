import { useUnit } from "effector-react";

import { TypeFilter } from "@/models/search/types";
import { $searchModel } from "@/models/search";
import {
  setIsShowModalEvent,
  setSearchTextEvent,
  setIsShowModalFilterEvent,
  setSelectOptionEvent,
  setPageEvent,
  setImgEvent,
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
  const isLoading = useUnit(getCardsSearchPhotoFx.pending) || isLoadingAI;

  const listFilter = [
    {
      id: TypeFilter.symbol,
      select: selectedSymbol,
      name: "country",
    },
    {
      id: TypeFilter.country,
      select: selectedCountries,
      name: "country",
    },
    {
      id: TypeFilter.area,
      select: selectedRegions,
      name: "area",
    },
    {
      id: TypeFilter.city,
      select: selectedCities,
      name: "city",
    },
    {
      id: TypeFilter.manufacturer,
      select: selectedManufacturers,
      name: "manufacturer",
    },
  ];

  const selectedFilter = listFilter.filter(
    (filterItem) => filterItem.select.length > 0
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
    setSelectOptionEvent({ type, option: [] });
    setPageEvent(1);

    const param = {
      regionName: type === TypeFilter.area ? [] : selectedRegions,
      countryName: type === TypeFilter.country ? [] : selectedCountries,
      manufacturerName:
        type === TypeFilter.manufacturer ? [] : selectedManufacturers,
      symbolName: type === TypeFilter.symbol ? [] : selectedSymbol,
      page: 1,
      offset: limit,
    };

    if (img) {
      getCardsSearchPhotoFx({
        page: 1,
        offset: limit,
        photoUri: img.split(",")[1],
      });
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

  const onPressDeleteImg = () => {
    setImgEvent(null);
    setPageEvent(1);
    getCardsFx({
      regionName: selectedRegions,
      countryName: selectedCountries,
      manufacturerName: selectedManufacturers,
      symbolName: selectedSymbol,
      page: 1,
      offset: limit,
    });
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
    onPressDeleteImg,
  };
}
