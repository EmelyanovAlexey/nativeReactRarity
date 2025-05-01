import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

import Photo from "@/components/Icons/Photo";
import Button from "@/components/Button";
import SearchFilterContainer from "@/container/SearchFilter";
import ModalSearchContainer from "@/container/ModalSearch";
import ModalSearchFilterContainer from "@/container/ModalSearchFilter";
import Spinner from "@/components/Spinner";
import ModalMenuSearchPhoto from "@/components/ModalMenuSearchPhoto";
// import ModalCamera from "@/components/ModalCamera";

import useSearchScreen from "./useSearchScreen";
import { Colors } from "@/shared/constStyle";

export default function SearchScreen() {
  const { t } = useTranslation();
  const {
    isLoading,
    showPhotoMenu,
    showPhotoCamera,
    handleStartScan,
    handleSetStartCamera,
    handleLoadScan,
    handleOpenMenuScan,
    handleCloseMenuScan,
  } = useSearchScreen();

  return (
    <View style={styles.container}>
      <SearchFilterContainer />
      <ModalSearchContainer />

      <ModalSearchFilterContainer />

      {/* {showPhotoCamera && (
        <ModalCamera
          setModalVisible={() => handleSetStartCamera(false)}
          onCapture={() => {}}
          onPickFromGallery={() => {}}
        />
      )} */}

      {isLoading && (
        <View style={styles.loading}>
          <Spinner />
          <Text style={styles.loadingText}>{t("loadingSearch")}</Text>
        </View>
      )}

      <ModalMenuSearchPhoto
        modalVisible={showPhotoMenu}
        setModalVisible={() => handleCloseMenuScan}
        handleStartPhoto={() => handleSetStartCamera(true)}
        handleLoadPhoto={handleLoadScan}
      />
      <Button
        filled={true}
        style={styles.button}
        leftContent={<Photo />}
        onPress={handleOpenMenuScan}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 24,
    backgroundColor: Colors.BgcColor,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
  },
  loading: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
    zIndex: 1,
  },
  loadingText: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Inter_400Regular",
    color: Colors.GrayColor,
    marginTop: 8,
  },
  button: {
    position: "absolute",
    paddingVertical: 14,
    paddingHorizontal: 13,
    right: 16,
    bottom: 5,
  },
});
