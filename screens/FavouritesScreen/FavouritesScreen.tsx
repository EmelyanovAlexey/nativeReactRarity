import { View, StyleSheet, Text, FlatList } from "react-native";

import { CardType } from "@/models/home/types";
import useFavouritesScreen from "./useFavouritesScreen";

import PopularCardDetail from "@/components/PopularCardDetail";
import FavouritesCard from "@/components/FavouritesCard";

export default function FavouritesScreen() {
  const { cards, selectedItem, modalVisible, setModalVisible, handlePress } =
    useFavouritesScreen();

  const renderItem = ({ item }: { item: CardType }) => (
    <FavouritesCard
      key={item.id}
      style={{ marginBottom: 8 }}
      item={item}
      onPress={() => handlePress(item)}
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
      />

      {selectedItem !== null && (
        <PopularCardDetail
          data={selectedItem}
          modalVisible={modalVisible}
          setModalVisible={(param: boolean) => setModalVisible(param)}
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
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  list: {
    gap: 8,
  },
});
