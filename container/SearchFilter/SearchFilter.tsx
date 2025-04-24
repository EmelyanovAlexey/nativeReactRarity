import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBlock from "@/components/SearchBlock";
import Chips from "@/components/Chips";

import useSearchFilter from "./useSearchFilter";
import { Colors } from "@/shared/constStyle";

export default function SearchFilter() {
  const {
    textFilter,
    handleSearchFilter,
    handleDelete,
    handleOpenFilter,
    handleDeleteFilter,
  } = useSearchFilter();

  return (
    <>
      <View style={styles.container}>
        <SearchBlock
          text={textFilter}
          onPress={handleSearchFilter}
          onPressDelete={handleDeleteFilter}
          onPressFilter={handleOpenFilter}
        />
      </View>

      <View style={styles.scroll}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Chips
            text="Германия"
            onPress={() => handleDelete()}
            style={styles.selectItem}
          />
          <Chips text="Германия" onPress={() => {}} style={styles.selectItem} />
          <Chips text="Германия" onPress={() => {}} style={styles.selectItem} />
          <Chips text="Германия" onPress={() => {}} style={styles.selectItem} />
          <Chips text="Германия" onPress={() => {}} style={styles.selectItem} />
        </ScrollView>
      </View>

      <View style={styles.container}>
        <Text style={styles.description}>Результат поиска</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
  },
  description: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 12,
    marginTop: 12,
    lineHeight: 20,
  },
  scroll: {
    paddingLeft: 24,
    marginTop: 12,
    gap: 12,
    width: "100%",
  },
  selectItem: {
    marginRight: 16,
  },
});
