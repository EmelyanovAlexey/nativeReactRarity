import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import Button from "@/components/Button";

type Props = {
  modalVisible: boolean;
  style?: ViewStyle;
  setModalVisible: (param: boolean) => void;
};

const ModalExitUser = ({
  style,
  modalVisible = false,
  setModalVisible,
}: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleExit = () => {
    handleClose();
    navigation.navigate("first");
  };

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
        <Text style={styles.modalTitle}>{t("exitText")}</Text>

        <Button title={t("exit")} filled={true} onPress={handleExit} />
        <Button title={t("cancel")} filled={false} onPress={handleClose} />
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
    height: 230,
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

export default ModalExitUser;
