import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { Colors } from "@/shared/constStyle";

type Props = {
  modalVisible: boolean;
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
    dateTo: string;
    dateFrom: string;
    isStar: boolean;
    country: string;
    area: string;
    city: string;
    manufacturer: string;
  };
  style?: ViewStyle;
  setModalVisible: (param: boolean) => void;
};

const PopularCardDetail = ({
  style,
  modalVisible = false,
  data,
  setModalVisible,
}: Props) => {
  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection="down"
      style={styles.modal}
      onBackdropPress={() => setModalVisible(false)}
      propagateSwipe
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeaderIndicator} />
        <Text style={styles.modalTitle}>{data?.title}</Text>
        <Text style={styles.modalDescription}>{data?.description}</Text>
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
    height: "90%",
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 16,
    color: "#333",
  },
});

export default PopularCardDetail;
