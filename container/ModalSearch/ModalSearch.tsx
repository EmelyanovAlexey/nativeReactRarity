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
    selectedParam,
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
      selectedParam={selectedParam}
      onChangeSearchText={onChangeSearchText}
      setModalVisible={setModalVisibleSearch}
      onClickParam={onClickParam}
    />
  );
}
