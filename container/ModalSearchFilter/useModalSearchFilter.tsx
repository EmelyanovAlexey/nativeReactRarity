import { useUnit } from "effector-react";

import { $searchModel } from "@/models/search";
import { 
  setIsShowModalEvent, 
  setSearchTextEvent } from "@/models/search/events/events";
import { useState } from "react";

export default function useModalSearchFilter() {
  const { isShowModalFilter, searchText } = useUnit($searchModel);

  const setModalVisibleSearch = (param: boolean) => {
    setIsShowModalEvent(param);
  };

  const onChangeSearchText = (value: string) => {
    setSearchTextEvent(value);
  };

  return {
    modalVisibleSearch: isShowModalFilter,
    textFilter: searchText,
    setModalVisibleSearch,
    onChangeSearchText,
  };
}
