import { useEffect, useRef } from "react";
import { useUnit } from "effector-react";

import { $searchModel } from "@/models/search";
import { TypeFilter } from "@/models/search/types";
import {
  getCardsFx,
  getSearchFilterParamFx,
  getCardsSearchPhotoFx,
} from "@/models/search/effects/effects";
import {
  setIsShowModalEvent,
  setSearchTextEvent,
  setSelectOptionEvent,
  setPageEvent,
} from "@/models/search/events/events";

export default function useModalSearch() {
  const {
    isShowModal,
    searchText,
    selectedCountries,
    selectedRegions,
    selectedManufacturers,
    selectedSymbol,
    img,
    paramsFilter,
    limit,
  } = useUnit($searchModel);
  const isLoading = useUnit(getSearchFilterParamFx.pending);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const selectedParam = {
    // selectedCountries,
    // selectedManufacturers,
    selectedSymbol,
  };

  // Следим за изменением текста и ставим таймер
  useEffect(() => {
    if (!searchText) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      getSearchFilterParamFx(searchText);
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchText]);

  const setModalVisibleSearch = (param: boolean) => {
    setPageEvent(1);
    const paramRequest = {
      countryName: selectedCountries,
      regionName: selectedRegions,
      manufacturerName: selectedManufacturers,
      symbolName: selectedSymbol,
      page: 1,
      offset: limit,
    };

    if (img) {
      getCardsSearchPhotoFx({
        page: 1,
        offset: limit,
        photoUri: img.split(",")[1],
      });
      setIsShowModalEvent(param);
      return;
    }

    getCardsFx(paramRequest);
    setIsShowModalEvent(param);
  };

  const onChangeSearchText = (value: string) => {
    setSearchTextEvent(value);
  };

  // клик на чипсину в поиске
  const onClickParam = (type: TypeFilter, value: string) => {
    setSelectOptionEvent({
      type,
      option: [{ id: 1, name: value }],
    });
  };

  return {
    modalVisibleSearch: isShowModal,
    textFilter: searchText,
    paramsFilter,
    isLoading,
    selectedParam,
    setModalVisibleSearch,
    onChangeSearchText,
    onClickParam,
  };
}
