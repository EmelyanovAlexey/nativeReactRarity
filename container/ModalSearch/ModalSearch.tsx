import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ModalSearch from "@/components/ModalSearch";

import useModalSearch from "./useModalSearch";
import { Colors } from "@/shared/constStyle";

export default function ModalSearchContaner() {
  const {
    modalVisibleSearch,
    textFilter,
    setModalVisibleSearch,
    onChangeSearchText,
  } = useModalSearch();

  return (
    <ModalSearch
      modalVisible={modalVisibleSearch}
      searchText={textFilter}
      onChangeSearchText={onChangeSearchText}
      setModalVisible={setModalVisibleSearch}
    />
  );
}
