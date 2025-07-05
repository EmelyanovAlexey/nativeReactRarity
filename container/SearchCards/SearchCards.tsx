import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";

import Spinner from "@/components/Spinner";

import { Colors } from "@/shared/constStyle";
import { CardType } from "@/models/home/types";

import PopularCardDetail from "@/components/PopularCardDetail";
import FavouritesCard from "@/components/FavouritesCard";

import useSearchCards from "./useSearchCards";

export default function SearchFilter() {
  const { t } = useTranslation();
  const {
    flatListKey,
    flatListRef,
    cards,
    isLoading,
    cardDetail,
    cardDetailLoading,
    selectedItem,
    modalVisible,
    handleCloseDetail,
    handlePress,
    handleSetFavorite,
    handleLoadMore,
  } = useSearchCards();

  const renderItem = ({ item }: { item: CardType }) => (
    <FavouritesCard
      key={item.id}
      style={{ marginBottom: 8 }}
      item={item}
      onPress={() => handlePress(item)}
      setIsFavorite={handleSetFavorite}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        key={flatListKey}
        ref={flatListRef}
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={1}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.7}
        initialNumToRender={15} // начальное количество элементов
        maxToRenderPerBatch={20} // сколько рендерить за раз
        windowSize={10} // окна выше и ниже экрана в памяти
        removeClippedSubviews={false} // чтобы не удалялись скрытые элементы
      />

      {isLoading && (
        <View style={styles.loading}>
          <Spinner />
          <Text style={styles.loadingText}>{t("loadingSearch")}</Text>
        </View>
      )}

      {selectedItem !== null && (
        <PopularCardDetail
          data={cardDetail}
          isLoading={cardDetailLoading}
          modalVisible={modalVisible}
          setModalVisible={handleCloseDetail}
          setIsFavorite={handleSetFavorite}
        />
      )}
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const calculatedWidth = screenWidth - 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 8,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  list: {
    gap: 8,
    width: calculatedWidth,
  },
  loading: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
    zIndex: 1,
  },
  loadingText: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Inter_400Regular",
    color: Colors.GrayColor,
    marginTop: 8,
  },
});
