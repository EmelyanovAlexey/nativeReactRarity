import { useEffect, useRef, useState } from "react";
import { useUnit } from "effector-react";

import { CardType } from "@/models/home/types";
import { $searchModel } from "@/models/search";
import {
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "@/models/search/effects/effects";
import { TypeFilter } from "@/models/search/types";
import {
  clearDetailCardEvent,
  setPageEvent,
} from "@/models/search/events/events";
import { FlatList } from "react-native";

export default function useBottomTabs() {
  const {
    cards,
    cardDetail,
    limit,
    page,
    hasMore,
    img,
    selectedCountries,
    selectedRegions,
    selectedCities,
    selectedManufacturers,
    selectedSymbol,
  } = useUnit($searchModel);
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
    clearDetailCardEvent();
  };

  const handleSetFavorite = (id: number) => {
    setFavouriteFx(id);
  };

  useEffect(() => {}, [flatListRef]);

  useEffect(() => {
    if (cards.length <= limit) {
      setTimeout(() => {
        setFlatListKey((prev) => prev + 1);
      }, 300);
    }
  }, [cards]);

  const loadCards = async (pageToLoad = 1) => {
    await getCardsFx({
      regionName: !selectedRegions ? undefined : selectedRegions?.name,
      countryName: !selectedCountries ? undefined : selectedCountries?.name,
      manufacturerName: !selectedManufacturers
        ? undefined
        : selectedManufacturers?.name,
      symbolName: !selectedSymbol ? undefined : selectedSymbol?.name,
      photoUri: img,
      page: pageToLoad,
      offset: limit,
    });
  };

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
    handleLoadMore,
  };
}
