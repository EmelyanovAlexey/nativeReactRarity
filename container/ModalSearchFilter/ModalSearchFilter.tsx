import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";

import ModalSearchFilter from "@/components/ModalSearchFilter";
import ModalFilterCurrent from "@/components/ModalFilterCurrent";
import ModalSmall from "@/components/ModalSmall";

import useModalSearchFilter from "./useModalSearchFilter";
import { Colors } from "@/shared/constStyle";

import { TypeFilter } from "@/models/search/types";

export default function ModalSearchFilterContainer() {
  const {
    modalVisibleSearch,
    textFilter,
    typeCurFilter,
    listFilterRoot,
    isLoading,
    setModalVisibleSearch,
    onChangeSearchText,
    onSelectOption,
    onSelectFilterRoot,
    handleDelete,
    resetFilter,
  } = useModalSearchFilter();

  return (
    <>
      {modalVisibleSearch && (
        <ModalSearchFilter
          list={listFilterRoot}
          setModalVisible={setModalVisibleSearch}
          onSelectFilter={onSelectFilterRoot}
          handleDelete={handleDelete}
          resetFilter={resetFilter}
        />
      )}

      {listFilterRoot.map((item) => {
        if (typeCurFilter !== item.id) return null;

        return (
          <ModalFilterCurrent
            title={item.name}
            modalVisible={typeCurFilter === item.id}
            searchText={textFilter}
            options={item?.options || []}
            select={item.select}
            isLoading={isLoading}
            setModalVisible={() => onSelectFilterRoot(TypeFilter.empty)}
            onChangeSearchText={(param) => onChangeSearchText(param)}
            onSelect={(param) => onSelectOption(item.id, param)}
          />
        );
      })}
    </>
  );
}
