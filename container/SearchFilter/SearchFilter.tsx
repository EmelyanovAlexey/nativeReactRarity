import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import SearchBlock from "@/components/SearchBlock";
import Chips from "@/components/Chips";
import StartFilter from "@/components/StartFilter";

import useSearchFilter from "./useSearchFilter";
import { Colors } from "@/shared/constStyle";

export default function SearchFilter() {
  const { t } = useTranslation();
  const {
    textFilter,
    selectedFilter,
    isLoading,
    count,
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

      {selectedFilter.length > 0 && (
        <View style={styles.scroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedFilter.map((filter) => (
              <Chips
                key={filter.id}
                text={filter.select?.name || ""}
                onPress={() => handleDelete(filter.id)}
                style={styles.selectItem}
              />
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.container}>
        <Text style={styles.description}>
          {t("resultSearch")} {count && `: ${count} шт.`}
        </Text>
      </View>

      {textFilter === "" && selectedFilter.length === 0 && !isLoading && (
        <View style={styles.startFilter}>
          <StartFilter />
        </View>
      )}
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
  startFilter: {
    width: "100%",
    position: "absolute",
    height: "90%",
    top: "24%",
    overflow: "hidden",
  },
});
