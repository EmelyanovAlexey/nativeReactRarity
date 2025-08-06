import { useEffect, useState } from "react";
import { useUnit } from "effector-react";

import {
  countriesFx,
  regionsFx,
  citiesFx,
  manufacturersFx,
  getCardsFx,
  getCardsSearchPhotoFx,
} from "@/models/search/effects/effects";
import { TypeFilter, FilterRoot, FilterOption } from "@/models/search/types";
import { $searchModel } from "@/models/search";
import {
  // setIsShowModalEvent,
  setIsShowModalFilterEvent,
  // setSearchTextEvent,
  setSelectOptionEvent,
  setPageEvent,
  resetFilterEvent,
} from "@/models/search/events/events";

export default function useModalSearchFilter() {
  const {
    isShowModalFilter,
    countries,
    selectedCountries,
    regions,
    selectedRegions,
    cities,
    selectedCities,
    manufacturers,
    selectedManufacturers,
    limit,
    selectedSymbol,
    img,
  } = useUnit($searchModel);
  const [filterText, setFilterText] = useState<string>("");
  const [typeCurFilter, setTypeCurFilter] = useState<TypeFilter>(
    TypeFilter.empty
  );
  const [debouncedText, setDebouncedText] = useState<string>("");

  const [
    isCountriesLoading,
    isRegionsLoading,
    isCitiesLoading,
    isManufacturersLoading,
  ] = useUnit([
    countriesFx.pending,
    regionsFx.pending,
    citiesFx.pending,
    manufacturersFx.pending,
  ]);

  const isLoading =
    isCountriesLoading ||
    isRegionsLoading ||
    isCitiesLoading ||
    isManufacturersLoading;
  const listFilterRoot: FilterRoot[] = [
    {
      id: TypeFilter.manufacturer,
      name: "manufacturer",
      select: selectedManufacturers,
      options: manufacturers,
    },
    {
      id: TypeFilter.country,
      name: "country",
      select: selectedCountries,
      options: countries,
    },
    {
      id: TypeFilter.area,
      name: "area",
      select: selectedRegions,
      options: regions,
    },
    {
      id: TypeFilter.city,
      name: "city",
      select: selectedCities,
      options: cities,
    },
  ];

  function getData(param: TypeFilter, text: string) {
    switch (param) {
      case TypeFilter.country:
        countriesFx(text);
        return;
      case TypeFilter.area:
        regionsFx(text);
        return;
      case TypeFilter.city:
        citiesFx(text);
        return;
      case TypeFilter.manufacturer:
        manufacturersFx(text);
        return;
    }
  }

  const setModalVisibleSearch = (param: boolean) => {
    setPageEvent(1);

    const paramRequest = {
      countryName: selectedCountries?.name,
      regionName: selectedRegions?.name,
      manufacturerName: selectedManufacturers?.name,
      symbolName: selectedSymbol?.name,
      page: 1,
      offset: limit,
    };

    if (img) {
      getCardsSearchPhotoFx({ ...paramRequest, photoUri: img.split(",")[1] });
      setIsShowModalFilterEvent(param);
      return;
    }

    getCardsFx(paramRequest);
    setIsShowModalFilterEvent(param);
  };

  const onChangeSearchText = (param: string) => {
    setFilterText(param);
  };

  const onSelectFilterRoot = (param: TypeFilter) => {
    setTypeCurFilter(param);
    getData(param, "");
  };

  const onSelectOption = (type: TypeFilter, option: FilterOption) => {
    setSelectOptionEvent({ type, option });
    setTypeCurFilter(TypeFilter.empty);
  };

  // Удалить элемент фильтра
  const handleDelete = (type: TypeFilter) => {
    const findElementSelect = listFilterRoot.find(
      (filter) => filter.id === type
    )?.select;

    if (findElementSelect) {
      setSelectOptionEvent({ type, option: findElementSelect });
    }
  };

  // сбросить значение фильтра
  const resetFilter = () => {
    resetFilterEvent();
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(filterText);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [filterText]);

  useEffect(() => {
    if (typeCurFilter !== TypeFilter.empty) {
      getData(typeCurFilter, debouncedText);
    }
  }, [debouncedText, typeCurFilter]);

  return {
    modalVisibleSearch: isShowModalFilter,
    textFilter: filterText,
    typeCurFilter,
    listFilterRoot,
    isLoading,
    setModalVisibleSearch,
    onChangeSearchText,
    onSelectFilterRoot,
    onSelectOption,
    handleDelete,
    resetFilter,
  };
}
