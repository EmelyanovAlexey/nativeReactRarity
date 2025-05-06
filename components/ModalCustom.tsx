import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/shared/constStyle";
import Arrow from "@/components/Icons/Arrow";

import { useTranslation } from "react-i18next";

type Props = {
  style?: ViewStyle;
  styleBody?: ViewStyle;
  children: React.ReactNode;
  setModalVisible: (param: boolean) => void;
};

const ModalCustom = ({
  style,
  styleBody,
  children,
  setModalVisible,
}: Props) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.modal, style]}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.arrow}>
              <Arrow />
            </View>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>{t("titleSearchPhoto")}</Text>
        </View>

        <View style={[styles.body, styleBody]}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    justifyContent: "flex-end",
    margin: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  modalContent: {
    backgroundColor: Colors.WhiteColor,
    padding: 20,
    height: "100%",
    width: "100%",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 24,
  },
  arrow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 34,
    height: 32,
    borderRadius: "50%",
    backgroundColor: Colors.GrayColor2,
    marginRight: 18,
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: 20,
    fontFamily: "Inter_400Regular",
  },
  body: {
    width: "100%",
  },
});

export default ModalCustom;
