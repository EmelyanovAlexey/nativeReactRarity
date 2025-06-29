import { useEffect, useState } from "react";
import { useUnit } from "effector-react";

import {
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "@/models/home/effects/effects";
import { ActiveTab } from "@/models/main/types";
import { setActiveTabEvent } from "@/models/main/events/events";

import { CardType } from "@/models/home/types";
import { $popularModel } from "@/models/home";

export default function useHomeScreen() {
  const { cards, cardDetail } = useUnit($popularModel);
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
  };

  const handleSetFavorite = (id: number) => {
    setFavouriteFx(id);
  };

  const handleBack = () => {
    setActiveTabEvent(ActiveTab.search);
  };

  useEffect(() => {
    getCardsFx({});
  }, []);

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
    handleBack,
  };
}
