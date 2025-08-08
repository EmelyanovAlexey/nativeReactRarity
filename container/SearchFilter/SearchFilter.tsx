import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Arrow from "@/components/Icons/Arrow";
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
    isShowStart,
    img,
    count,
    handleSearchFilter,
    handleDelete,
    handleOpenFilter,
    handleDeleteFilter,
    handleToHome,
    onPressDeleteImg,
  } = useSearchFilter();

  const getTextChips = (filterItem: any) => {
    if (filterItem.select.length === 1) {
      return filterItem.select[0]?.name;
    }

    if (filterItem.select.length > 1) {
      return `${t(filterItem.name)} +${filterItem.select.length}`;
    }

    return "";
  };

  // Если было выбрано изображение
  if (img) {
    return (
      <View style={styles.imgContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onPressDeleteImg}>
            <View style={styles.arrow}>
              <Arrow />
            </View>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>{t("imageSearch")}</Text>
        </View>

        <Text style={styles.label}>{t("yourImage")}</Text>

        <Image source={{ uri: img }} style={styles.imageBig} />

        <Text style={styles.label}>{t("resultSearch2")}</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <SearchBlock
          text={textFilter}
          onPress={handleSearchFilter}
          onPressDelete={handleDeleteFilter}
          onPressFilter={handleOpenFilter}
          onPressDeleteImg={onPressDeleteImg}
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
                text={getTextChips(filter)}
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
  imgContainer: {
    padding: 20,
    width: "100%",
    paddingBottom: 10,
    paddingTop: 0,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 24,
  },
  arrow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 34,
    height: 32,
    borderRadius: "50%",
    backgroundColor: Colors.GrayColor2,
    marginRight: 18,
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: 20,
    fontFamily: "Inter_400Regular",
  },
  label: {
    fontWeight: 600,
    fontSize: 20,
    fontFamily: "Inter_400Regular",
  },
  imageBig: {
    width: 130,
    height: 130,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 12,
    marginTop: 12,
    // borderWidth: 1,
  },

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
    height: "80%",
    top: "20%",
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
