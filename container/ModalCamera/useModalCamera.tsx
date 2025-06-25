import { useRef, useState } from "react";
import { useUnit } from "effector-react";

import { $searchModel } from "@/models/search";
import { getCardsFx } from "@/models/search/effects/effects";
import {
  setIsShowModalEvent,
  setImgEvent,
} from "@/models/search/events/events";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

export default function useModalCamera(
  setModalVisible: (param: boolean) => void
) {
  const {
    searchText,
    selectedCountries,
    selectedRegions,
    selectedCities,
    selectedManufacturers,
  } = useUnit($searchModel);
  const [facing, setFacing] = useState<CameraType>("back");
  const [flash, setFlash] = useState<"torch" | "off">("off");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const setModalVisibleSearch = (img: string) => {
    getCardsFx({
      regionName: selectedRegions?.name,
      countryName: selectedCountries?.name,
      manufacturerName: selectedManufacturers?.name,
      photoUri: img,
    });
  };

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();

      if (photo?.uri) {
        setImgEvent(photo?.uri);
        setModalVisible(false);
        setModalVisibleSearch(photo?.uri);
        // console.log("📸 Фото сделано:", photo?.uri);
      }
    }
  };

  const getPhotoGallery = async () => {
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
      setImgEvent(result.assets[0].uri); // сохраняем URI
      setModalVisibleSearch(result.assets[0].uri);
      // console.log("📸 Фото из галереи:", result.assets[0].uri);
    }
    setModalVisible(false);
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const toggleFlash = () => {
    setFlash((prev) => (prev === "off" ? "torch" : "off"));
  };

  return {
    facing,
    flash,
    permission,
    cameraRef,
    getPhotoGallery,
    handleTakePhoto,
    toggleCameraFacing,
    toggleFlash,
    requestPermission,
  };
}
