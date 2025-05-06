import { useEffect, useState } from "react";
import { useUnit } from "effector-react";

import {
  getCardsFavouritesFx,
  getCardsDetailFx,
  setFavouriteFx,
} from "@/models/favourites/effects/effects";
import {
  setCardEvent,
  clearDetailCardEvent,
} from "@/models/favourites/events/events";
import { CardType } from "@/models/home/types";
import { $favouritesModel } from "@/models/favourites";

export default function useFavouritesScreen() {
  const { cards, cardDetail } = useUnit($favouritesModel);
  const [selectedItem, setSelectedItem] = useState<CardType | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isLoading = useUnit(getCardsFavouritesFx.pending);
  const cardDetailLoading = useUnit(getCardsDetailFx.pending);

  const handlePress = (item: CardType) => {
    getCardsDetailFx(item.id);
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSetFavorite = (id: number) => {
    setFavouriteFx(id);
    setCardEvent(id);
  };

  const handleCloseDetail = () => {
    if (cardDetail?.is_favourite === false) {
      setCardEvent(cardDetail.id);
    }
    setModalVisible(false);
    clearDetailCardEvent();
  };

  useEffect(() => {
    getCardsFavouritesFx();
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
  };
}
