import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

import Photo from "@/components/Icons/Photo";
import Button from "@/components/Button";
import ModalMenuSearchPhoto from "@/components/ModalMenuSearchPhoto";
import ModalCamera from "@/container/ModalCamera";
import SearchFilterContainer from "@/container/SearchFilter";
import ModalSearchContainer from "@/container/ModalSearch";
import ModalSearchFilterContainer from "@/container/ModalSearchFilter";
import SearchCardsContainer from "@/container/SearchCards";

import useSearchScreen from "./useSearchScreen";
import { Colors } from "@/shared/constStyle";

export default function SearchScreen() {
  const { t } = useTranslation();
  const {
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

      <SearchCardsContainer />

      {showPhotoCamera && (
        <ModalCamera setModalVisible={() => handleSetStartCamera(false)} />
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
  button: {
    position: "absolute",
    paddingVertical: 14,
    paddingHorizontal: 13,
    right: 16,
    bottom: 5,
    zIndex: 50,
  },
});
