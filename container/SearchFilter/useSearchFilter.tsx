import { useUnit } from "effector-react";

import { $searchModel } from "@/models/search";
import { 
  setIsShowModalEvent, 
  setSearchTextEvent,
  setIsShowModalFilterEvent } from "@/models/search/events/events";

export default function useBottomTabs() {
  const { isShowModal, searchText } = useUnit($searchModel);

  const handleSearchFilter = () => {
    setIsShowModalEvent(true);
    console.log("11111");
  };

  const handleDelete = () => {
    setSearchTextEvent("");
  };

  const handleOpenFilter = () => {
    setIsShowModalFilterEvent(true);
  };

  const handleDeleteFilter = () => {
    setSearchTextEvent("");
    console.log("+++++++++++++");
  };

  return {
    textFilter: searchText,
    handleSearchFilter,
    handleDelete,
    handleOpenFilter,
    handleDeleteFilter,
  };
}
