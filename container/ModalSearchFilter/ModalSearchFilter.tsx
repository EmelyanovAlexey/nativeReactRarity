import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ModalSearchFilter from '@/components/ModalSearchFilter'

import useModalSearchFilter from "./useModalSearchFilter";
import { Colors } from "@/shared/constStyle";

export default function ModalSearchFilterContainer() {
  const {
    modalVisibleSearch,
    textFilter,
    setModalVisibleSearch,
    onChangeSearchText,
  } = useModalSearchFilter();

  return  <ModalSearchFilter 
            modalVisible={modalVisibleSearch} 
            searchText={textFilter} 
            onChangeSearchText={onChangeSearchText} 
            setModalVisible={setModalVisibleSearch} />
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
  },
});
