import { View, StyleSheet, Text, FlatList } from "react-native";

import { CardType } from "@/models/home/types";

import Spinner from "@/components/Spinner";
import PopularCardDetail from "@/components/PopularCardDetail";
import PopularCard from "@/components/PopularCard";

import useHomeScreen from "./useHomeScreen";

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
    <PopularCard
      key={item.id}
      style={{ marginRight: index % 2 === 0 ? 8 : 0, marginBottom: 8 }}
      item={item}
      onPress={() => handlePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Популярное</Text>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{ justifyContent: "space-between" }}
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
