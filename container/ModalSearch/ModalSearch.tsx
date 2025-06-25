import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ModalSearch from "@/components/ModalSearch";

import useModalSearch from "./useModalSearch";
import { Colors } from "@/shared/constStyle";

export default function ModalSearchContaner() {
  const {
    modalVisibleSearch,
    textFilter,
    paramsFilter,
    isLoading,
    setModalVisibleSearch,
    onChangeSearchText,
    onClickParam,
  } = useModalSearch();

  return (
    <ModalSearch
      modalVisible={modalVisibleSearch}
      searchText={textFilter}
      paramsFilter={paramsFilter}
      isLoading={isLoading}
      onChangeSearchText={onChangeSearchText}
      setModalVisible={setModalVisibleSearch}
      onClickParam={onClickParam}
    />
  );
}
