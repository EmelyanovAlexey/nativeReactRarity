import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";

import SearchBlock from "@/components/SearchBlock";
import Chips from "@/components/Chips";
import StartFilter from "@/components/StartFilter";

import useSearchFilter from "./useSearchFilter";
import { Colors } from "@/shared/constStyle";
import Button from "@/components/Button";
import Link from "@/components/Link";

export default function SearchFilter() {
  const { t } = useTranslation();
  const {
    textFilter,
    selectedFilter,
    isShowStart,
    img,
    count,
    isBeenSearch,
    handleSearchFilter,
    handleDelete,
    handleOpenFilter,
    handleDeleteFilter,
    handleToHome,
  } = useSearchFilter();

  return (
    <>
      <View style={styles.container}>
        <SearchBlock
          text={textFilter}
          onPress={handleSearchFilter}
          onPressDelete={handleDeleteFilter}
          onPressFilter={handleOpenFilter}
          leftContent={
            img ? (
              <Image source={{ uri: img }} style={styles.image} />
            ) : undefined
          }
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
          {count && `${t("resultSearch")}: ${count} шт.`}
        </Text>

        <TouchableOpacity onPress={handleToHome}>
          <Text style={[styles.buttonText]}>{t("showAll")}</Text>
        </TouchableOpacity>
      </View>

      {isShowStart && (
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
    zIndex: 2,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  buttonText: {
    color: Colors.Primary,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Inter_400Regular",
  },
});
