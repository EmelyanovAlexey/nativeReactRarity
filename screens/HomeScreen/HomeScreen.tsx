import { View, StyleSheet, Text, FlatList } from "react-native";

import { CardType } from "@/models/home/types";
import useHomeScreen from "./useHomeScreen";

import PopularCardDetail from "@/components/PopularCardDetail";
import PopularCard from "@/components/PopularCard";

export default function HomeScreen() {
  const { cards, selectedItem, modalVisible, setModalVisible, handlePress } =
    useHomeScreen();

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
    paddingTop: 24,
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
