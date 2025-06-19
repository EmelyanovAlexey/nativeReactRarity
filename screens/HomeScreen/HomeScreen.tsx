import { View, StyleSheet, Text, FlatList } from "react-native";

import { CardType } from "@/models/home/types";

import Spinner from "@/components/Spinner";
import PopularCardDetail from "@/components/PopularCardDetail";
import PopularCard from "@/components/PopularCard";

import useHomeScreen from "./useHomeScreen";
import FavouritesCard from "@/components/FavouritesCard";

export default function HomeScreen() {
  const {
    cards,
    isLoading,
    selectedItem,
    cardDetail,
    cardDetailLoading,
    modalVisible,
    handleCloseDetail,
    handlePress,
    handleSetFavorite,
  } = useHomeScreen();

  const renderItem = ({ item, index }: { item: CardType; index: number }) => (
      // <FavouritesCard
      //     setIsFavorite={() => false}
    <PopularCard
      key={item.id}
      style={{ marginRight: 8, marginBottom: 8 }}
      item={item}
      onPress={() => handlePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Все</Text>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        numColumns={3}
        contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 8 }}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 8 }}
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
    paddingTop: 24,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
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
