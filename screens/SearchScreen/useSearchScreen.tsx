import { useUnit } from "effector-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as ImagePicker from "expo-image-picker";
import { getCardsSearchPhotoFx } from "@/models/search/effects/effects";

import { setImgEvent, setPageEvent } from "../../models/search/events/events";
import { $searchModel } from "../../models/search";

export default function useSearchScreen() {
  const { t } = useTranslation();
  const {
    searchText,
    selectedCountries,
    selectedRegions,
    selectedCities,
    selectedManufacturers,
    limit,
    selectedSymbol,
  } = useUnit($searchModel);
  const [showPhotoMenu, setShowPhotoMenu] = useState<boolean>(false);
  const [showPhotoCamera, setShowPhotoCamera] = useState<boolean>(false);

  const setModalVisibleSearch = (img: string) => {
    const pureBase64 = img.split(",")[1];
    setPageEvent(1);

    getCardsSearchPhotoFx({
      countryName: selectedCountries?.name,
      regionName: selectedRegions?.name,
      manufacturerName: selectedManufacturers?.name,
      symbolName: selectedSymbol?.name,
      photoUri: pureBase64,
      page: 1,
      offset: limit,
    });
  };

  const pickImage = async () => {
    // Запрос разрешения
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Требуется разрешение для доступа к галерее!");
      return;
    }

    // Открытие галереи
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImgEvent(result.assets[0].uri);
      setModalVisibleSearch(result.assets[0].uri);
    }
    setShowPhotoMenu(false);
  };

  const handleSetStartCamera = (param: boolean) => {
    setShowPhotoCamera(param);
    setShowPhotoMenu(false);
  };

  const handleStartScan = () => {
    handleSetStartCamera(true);
  };

  const handleLoadScan = () => {
    pickImage();
  };

  const handleOpenMenuScan = () => {
    setShowPhotoMenu(true);
  };

  const handleCloseMenuScan = () => {
    setShowPhotoMenu(false);
  };

  return {
    showPhotoMenu,
    showPhotoCamera,
    handleStartScan,
    handleSetStartCamera,
    handleLoadScan,
    handleOpenMenuScan,
    handleCloseMenuScan,
  };
}

// react-native-camera
