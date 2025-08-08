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
  TouchableWithoutFeedback,
} from "react-native";
import Cross from "@/components/Icons/Cross";
import { useTranslation } from "react-i18next";
import { Colors } from "@/shared/constStyle";

type Props = {
  style?: ViewStyle;
  styleBody?: ViewStyle;
  children: React.ReactNode;
  bottomContent?: React.ReactNode;
  title?: string;
  modalVisible?: boolean;
  isScroll?: boolean;
  setModalVisible: (param: boolean) => void;
  onLayout?: () => void;
};

const ModalSmall = ({
  style,
  styleBody,
  modalVisible = true,
  title = "",
  children,
  isScroll = true,
  bottomContent,
  setModalVisible,
  onLayout,
}: Props) => {
  const { t } = useTranslation();
  const windowHeight = Dimensions.get("window").height;
  const modalRef = useRef<View>(null);

  const handleOverlayPress = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              ref={modalRef}
              onLayout={onLayout}
              style={[styles.modalContainer, { marginTop: windowHeight * 0.1 }]}
            >
              <View style={[styles.modal, style]}>
                <View style={styles.header}>
                  <Text style={styles.modalTitle}>{title}</Text>
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => setModalVisible(false)}
                  >
                    <Cross />
                  </TouchableOpacity>
                </View>

                {isScroll ? (
                  <ScrollView
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={styles.scrollContent}
                  >
                    <View style={[styles.body, styleBody]}>{children}</View>
                  </ScrollView>
                ) : (
                  <View style={[styles.body, styleBody]}>{children}</View>
                )}

                {bottomContent && <View>{bottomContent}</View>}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
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
    width: "92%",
    maxHeight: "70%",
    minHeight: "20%",
  },
  modal: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.WhiteColor,
  },
  close: {
    padding: 5,
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
    paddingRight: "2%",
  },
  body: {
    width: "100%",
  },
});

export default ModalSmall;
