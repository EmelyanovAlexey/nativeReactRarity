import { useUnit } from "effector-react";

import { $mainModel } from "@/models/main";

export default function useBottomTabs() {
  const { activeTab } = useUnit($mainModel);
  const textFilter = "";

  const handleSearchFilter = () => {
    // setActiveTabEvent(tab);
    console.log("11111");
  };

  const handleDelete = () => {
    // setActiveTabEvent(tab);
    console.log("==========");
  };

  const handleOpenFilter = () => {
    // setActiveTabEvent(tab);
    console.log("+++++++++++++");
  };

  const handleDeleteFilter = () => {
    // setActiveTabEvent(tab);
    console.log("+++++++++++++");
  };

  return {
    textFilter,
    handleSearchFilter,
    handleDelete,
    handleOpenFilter,
    handleDeleteFilter,
  };
}
