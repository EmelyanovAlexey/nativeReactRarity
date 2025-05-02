import { useState } from "react";
import { useUnit } from "effector-react";

import { CardType } from "@/models/home/types";
import { $searchModel } from "@/models/search";
import {
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "@/models/search/effects/effects";
import { clearDetailCardEvent } from "@/models/search/events/events";

export default function useBottomTabs() {
  const { cards, cardDetail } = useUnit($searchModel);
  const [selectedItem, setSelectedItem] = useState<CardType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isLoading = useUnit(getCardsFx.pending);
  const cardDetailLoading = useUnit(getCardsDetailFx.pending);

  const handlePress = (item: CardType) => {
    getCardsDetailFx(item.id);
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseDetail = () => {
    setModalVisible(false);
    clearDetailCardEvent();
  };

  const handleSetFavorite = (id: number) => {
    setFavouriteFx(id);
  };

  return {
    cards,
    isLoading,
    cardDetail,
    cardDetailLoading,
    selectedItem,
    modalVisible,
    handleCloseDetail,
    handlePress,
    handleSetFavorite,
  };
}
