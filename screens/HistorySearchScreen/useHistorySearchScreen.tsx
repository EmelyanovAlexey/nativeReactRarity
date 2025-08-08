import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import {
  getCardsFx,
  getHistoryFilterFx,
} from "@/models/search/effects/effects";

import {
  setSelectOptionEvent,
  setSearchTextEvent,
  setImgEvent,
} from "../../models/search/events/events";
import { setActiveTabEvent } from "../../models/main/events/events";

import { ActiveTab } from "../../models/main/types";
import { HistoryType, TypeFilter } from "../../models/search/types";
import { $searchHistoryModel } from "../../models/search";

export default function useHistorySearchScreen() {
  const { t } = useTranslation();
  const { histories, historiesLater } = useUnit($searchHistoryModel);
  const isLoading = useUnit(getHistoryFilterFx.pending);
  const navigation = useNavigation();

  const handleSearch = (history: HistoryType) => {
    getCardsFx({
      regionName: history.region_name
        ? [{ id: -1, name: history.region_name }]
        : [],
      countryName: history.country_name
        ? [{ id: -1, name: history.country_name }]
        : [],
      manufacturerName: history.manufacturer_name
        ? [{ id: -1, name: history.manufacturer_name }]
        : [],
      photoUri: null,
      symbolName: [],
    });

    setActiveTabEvent(ActiveTab.search);

    setSelectOptionEvent({
      type: TypeFilter.area,
      option: history.region_name
        ? [{ id: -1, name: history.region_name }]
        : [],
    });

    setSelectOptionEvent({
      type: TypeFilter.city,
      option: history.city_name ? [{ id: -1, name: history.city_name }] : [],
    });

    setSelectOptionEvent({
      type: TypeFilter.manufacturer,
      option: history.manufacturer_name
        ? [{ id: -1, name: history.manufacturer_name }]
        : [],
    });

    setSelectOptionEvent({
      type: TypeFilter.country,
      option: history.country_name
        ? [{ id: -1, name: history.country_name }]
        : [],
    });

    setSearchTextEvent(history.text || "");
    setImgEvent(history.photo || null);

    navigation.navigate("main");
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  useEffect(() => {
    getHistoryFilterFx();
  }, []);

  return {
    isLoading,
    histories,
    historiesLater,
    formatDate,
    handleSearch,
  };
}
