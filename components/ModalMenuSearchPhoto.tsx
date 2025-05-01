import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { Colors } from "@/shared/constStyle";
import Button from "@/components/Button";

import { useTranslation } from "react-i18next";

type Props = {
  modalVisible: boolean;
  style?: ViewStyle;
  setModalVisible: (param: boolean) => void;
  handleStartPhoto: () => void;
  handleLoadPhoto: () => void;
};

const ModalMenuSearchPhoto = ({
  style,
  modalVisible = false,
  setModalVisible,
  handleStartPhoto = () => {},
  handleLoadPhoto = () => {},
}: Props) => {
  const { t } = useTranslation();

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={handleClose}
      swipeDirection="down"
      onBackdropPress={handleClose}
      style={[styles.modal, style]}
      propagateSwipe
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeaderIndicator} />
        <Text style={styles.modalTitle}>{t("titleSearchPhoto")}</Text>

        <Button
          title={t("takePicture")}
          filled={true}
          onPress={handleStartPhoto}
        />
        <Button
          title={t("downloadFromGallery")}
          filled={false}
          onPress={handleLoadPhoto}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: 200,
  },
  modalHeaderIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 16,
    fontFamily: "Inter_400Regular",
  },
});

export default ModalMenuSearchPhoto;
