import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CardType } from "@/models/home/types";

import Spinner from "@/components/Spinner";
import PopularCardDetail from "@/components/PopularCardDetail";
import PopularCard from "@/components/PopularCard";

import useHomeScreen from "./useHomeScreen";
import Arrow from "@/components/Icons/Arrow";
import { Colors } from "@/shared/constStyle";

export default function HomeScreen() {
  const {
    cards,
    isLoading,
    selectedItem,
    cardDetail,
    cardDetailLoading,
    modalVisible,
    flatListKey,
    flatListRef,
    handleCloseDetail,
    handlePress,
    handleSetFavorite,
    handleBack,
    handleLoadMore,
  } = useHomeScreen();

  const renderItem = ({ item, index }: { item: CardType; index: number }) => (
    <PopularCard
      key={item.id}
      style={{ marginRight: 8, marginBottom: 8 }}
      item={item}
      onPress={() => handlePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBack}
          style={{ paddingHorizontal: 10 }}
        >
          <View style={styles.arrow}>
            <Arrow />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Все</Text>
      </View>

      <FlatList
        key={flatListKey}
        ref={flatListRef}
        data={cards}
        style={{ flexGrow: 1 }}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        numColumns={3}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingVertical: 8,
          flexGrow: 1,
        }}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 8 }}
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
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
    marginRight: 10,
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
