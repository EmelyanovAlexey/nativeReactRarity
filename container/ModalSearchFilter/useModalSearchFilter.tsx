import { useUnit } from "effector-react";

import { TypeFilter, FilterRoot, FilterOption } from "@/models/search/types";
import { $searchModel } from "@/models/search";
import {
  setIsShowModalEvent,
  setIsShowModalFilterEvent,
  setSearchTextEvent,
  setSelectOptionEvent,
} from "@/models/search/events/events";
import { useState } from "react";

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
  } = useUnit($searchModel);
  const [filterText, setFilterText] = useState<string>("");
  const [typeCurFilter, setTypeCurFilter] = useState<TypeFilter>(
    TypeFilter.empty
  );
  const listFilterRoot: FilterRoot[] = [
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
    {
      id: TypeFilter.manufacturer,
      name: "manufacturer",
      select: selectedManufacturers,
      options: manufacturers,
    },
  ];

  const setModalVisibleSearch = (param: boolean) => {
    setIsShowModalFilterEvent(param);
  };

  const onChangeSearchText = (param: string) => {
    setFilterText(param);
  };

  const onSelectFilterRoot = (param: TypeFilter) => {
    setTypeCurFilter(param);
  };

  const onSelectOption = (type: TypeFilter, option: FilterOption) => {
    setSelectOptionEvent({ type, option });
    setTypeCurFilter(TypeFilter.empty);
  };

  return {
    modalVisibleSearch: isShowModalFilter,
    textFilter: filterText,
    typeCurFilter,
    listFilterRoot,
    setModalVisibleSearch,
    onChangeSearchText,
    onSelectFilterRoot,
    onSelectOption,
  };
}
