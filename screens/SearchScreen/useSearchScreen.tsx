import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useSearchScreen() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [showPhotoMenu, setShowPhotoMenu] = useState<boolean>(false);
  const [showPhotoCamera, setShowPhotoCamera] = useState<boolean>(false);
  const isLoading = true;

  const handleSetStartCamera = (param: boolean) => {
    setShowPhotoCamera(param);
  };

  const handleStartScan = () => {
    handleSetStartCamera(true);
  };

  const handleLoadScan = () => {
    // setShowPhotoMenu(true);
  };

  const handleOpenMenuScan = () => {
    setShowPhotoMenu(true);
  };

  const handleCloseMenuScan = () => {
    setShowPhotoMenu(false);
  };

  return {
    isLoading,
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
