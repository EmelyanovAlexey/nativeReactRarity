import { useEffect, useRef, useState } from "react";
import { useUnit } from "effector-react";

import {
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "@/models/home/effects/effects";
import { ActiveTab } from "@/models/main/types";
import { setActiveTabEvent } from "@/models/main/events/events";
import { setPageEvent } from "@/models/home/events/events";

import { CardType } from "@/models/home/types";
import { $homeModel } from "@/models/home";
import { FlatList } from "react-native";

export default function useHomeScreen() {
  const { cards, cardDetail, page, limit, hasMore } = useUnit($homeModel);
  const [selectedItem, setSelectedItem] = useState<CardType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isLoading = useUnit(getCardsFx.pending);
  const cardDetailLoading = useUnit(getCardsDetailFx.pending);
  const [flatListKey, setFlatListKey] = useState(0);
  const flatListRef = useRef<FlatList>(null);

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

  const loadCards = async (pageToLoad = 1) => {
    await getCardsFx({ page: pageToLoad, offset: limit });
  };

  useEffect(() => {
    loadCards(1);
  }, []);

  useEffect(() => {}, [flatListRef]);

  useEffect(() => {
    if (cards.length <= limit) {
      setTimeout(() => {
        setFlatListKey((prev) => prev + 1);
      }, 300);
    }
  }, [cards]);

  const handleLoadMore = () => {
    if (isLoading || !hasMore || cards.length === 0) return;

    const nextPage = page + 1;
    setPageEvent(nextPage);
    loadCards(nextPage);
  };

  return {
    cards,
    isLoading,
    cardDetail,
    cardDetailLoading,
    selectedItem,
    modalVisible,
    flatListKey,
    flatListRef,
    handleCloseDetail,
    handlePress,
    handleSetFavorite,
    handleBack,
    handleLoadMore,
  };
}
