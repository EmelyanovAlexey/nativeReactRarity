import { useState } from "react";
import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";

import { Colors } from "@/shared/constStyle";
import useHomeScreen from "./useHomeScreen";

import PopularCardDetail from "@/components/PopularCardDetail";
import PopularCard from "@/components/PopularCard";

export default function HomeScreen() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const DATA = [
    {
      id: "1",
      image:
        "https://i.pinimg.com/originals/5d/e2/42/5de24294bad21ec99931f4c362354f22.jpg",
      title: "Jäger, Thomas & Co. Jäger, Thomas & Co.",
      dateTo: "10.12.1834",
      dateFrom: "02.02.1921",
      isStar: false,
      description:
        "Центральный мотив включает в себя сложный цветочный узор, выполненный вручную с использованием ярких цветов, которые сохранили свою яркость на протяжении многих лет. Вокруг основного дизайна расположены детализированные бордюрные узоры, типичные для стиля",
      country: "Германия",
      area: "Рейнская провинция",
      city: "Берлин",
      manufacturer: "Julius Lange Porzellanfabrik",
    },
    {
      id: "2",
      image:
        "https://images.wallpaperscraft.com/image/single/owl_bird_predator_73231_2560x1600.jpg",
      title: "Jäger, Thomas & Co.",
      dateTo: "10.12.1834",
      dateFrom: "02.02.1921",
      isStar: true,
      description:
        "Центральный мотив включает в себя сложный цветочный узор, выполненный вручную с использованием ярких цветов, которые сохранили свою яркость на протяжении многих лет. Вокруг основного дизайна расположены детализированные бордюрные узоры, типичные для стиля",
      country: "Германия",
      area: "Рейнская провинция",
      city: "Берлин",
      manufacturer: "Julius Lange Porzellanfabrik",
    },
    {
      id: "3",
      image:
        "https://i.pinimg.com/originals/f1/4f/d9/f14fd9f2408fc8e6135b921e551baaac.jpg",
      title: "Jäger, Thomas & Co.",
      dateTo: "10.12.1834",
      dateFrom: "02.02.1921",
      isStar: false,
      description:
        "Центральный мотив включает в себя сложный цветочный узор, выполненный вручную с использованием ярких цветов, которые сохранили свою яркость на протяжении многих лет. Вокруг основного дизайна расположены детализированные бордюрные узоры, типичные для стиля",
      country: "Германия",
      area: "Рейнская провинция",
      city: "Берлин",
      manufacturer: "Julius Lange Porzellanfabrik",
    },
  ];

  const renderItem = ({ item, index }: any) => (
    <PopularCard
      style={{ marginRight: index % 2 === 0 ? 8 : 0, marginBottom: 8 }}
      item={item}
      onPress={() => handlePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Популярное</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  list: {
    gap: 8,
  },
});
