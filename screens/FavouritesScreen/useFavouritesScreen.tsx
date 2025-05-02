import { useEffect, useState } from "react";
import { useUnit } from "effector-react";

import {
  getCardsFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "@/models/favourites/effects/effects";

import { CardType } from "@/models/home/types";
import { $favouritesModel } from "@/models/favourites";

export default function useFavouritesScreen() {
  const { cards, cardDetail } = useUnit($favouritesModel);
  const [selectedItem, setSelectedItem] = useState<CardType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isLoading = useUnit(getCardsFx.pending);
  const cardDetailLoading = useUnit(getCardsDetailFx.pending);

  const handlePress = (item: CardType) => {
    getCardsDetailFx(item.id);
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSetFavorite = (id: number) => {
    setFavouriteFx(id);
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
    setModalVisible,
    handlePress,
    handleSetFavorite,
  };
}
