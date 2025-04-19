import { useState } from "react";
import { useUnit } from "effector-react";

import { CardType } from "@/models/home/types";
import { $popularModel } from "@/models/home";

export default function useFavouritesScreen() {
  const { cards } = useUnit($popularModel);
  const [selectedItem, setSelectedItem] = useState<CardType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handlePress = (item: CardType) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return {
    cards,
    selectedItem,
    modalVisible,
    setModalVisible,
    handlePress,
  };
}
