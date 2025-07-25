import { View, StyleSheet, FlatList } from "react-native";

import { CardType } from "@/models/home/types";
import useFavouritesScreen from "./useFavouritesScreen";

import Spinner from "@/components/Spinner";
import PopularCardDetail from "@/components/PopularCardDetail";
import FavouritesCard from "@/components/FavouritesCard";
import HeaderPage from "@/components/HeaderPage";

export default function FavouritesScreen() {
  const {
    cards,
    isLoading,
    cardDetail,
    cardDetailLoading,
    selectedItem,
    modalVisible,
    handleCloseDetail,
    handlePress,
    handleSetFavorite,
  } = useFavouritesScreen();

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
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={1}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {isLoading && (
        <View style={styles.loading}>
          <Spinner />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "#fff",
  },
  list: {
    gap: 8,
  },
  loading: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
    zIndex: 1,
  },
});
