import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import { Colors } from "@/shared/constStyle";
import Cross from "@/components/Icons/Cross";
import { useTranslation } from "react-i18next";

type Props = {
  style?: ViewStyle;
  styleBody?: ViewStyle;
  children: React.ReactNode;
  setModalVisible: (param: boolean) => void;
};

const ModalSmall = ({ style, styleBody, children, setModalVisible }: Props) => {
  const { t } = useTranslation();
  const windowHeight = Dimensions.get("window").height;

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.overlay}>
        <View
          style={[styles.modalContainer, { marginTop: windowHeight * 0.1 }]}
        >
          <View style={[styles.modal, style]}>
            <View style={styles.header}>
              <Text style={styles.modalTitle}>{t("titleFilter")}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Cross />
              </TouchableOpacity>
            </View>

            <ScrollView
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={true}
              contentContainerStyle={styles.scrollContent}
            >
              <View style={[styles.body, styleBody]}>{children}</View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    maxHeight: "70%",
  },
  modal: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: Colors.WhiteColor,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  modalTitle: {
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Inter_400Regular",
  },
  scrollContent: {
    flexGrow: 1,
  },
  body: {
    width: "100%",
  },
});

export default ModalSmall;
