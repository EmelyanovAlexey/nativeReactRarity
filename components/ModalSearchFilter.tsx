import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import Modal from "react-native-modal";
import { Colors } from "@/shared/constStyle";
import Input from "@/components/Input";

import { useTranslation } from "react-i18next";

type Props = {
  modalVisible: boolean;
  searchText: string;
  style?: ViewStyle;
  setModalVisible: (param: boolean) => void;
  onChangeSearchText: (param: string) => void;
};

const ModalSearchFilter = ({
  style,
  modalVisible = false,
  searchText,
  setModalVisible,
  onChangeSearchText,
}: Props) => {
  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);

  const list = [
    {
      id: '1',
      label: "Близкие варианты",
    },
    {
      id: '2',
      label: "Производители",
    },
    {
      id: '3',
      label: "Страны",
    }
  ];

  return (
    <View style={styles.modal}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Фильтры</Text>

        <ScrollView
          ref={scrollViewRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.blocks}>
            {list.map((listItem) => (
              <TouchableOpacity onPress={()=>{}} style={styles.block} key={listItem.id}>
                <Text style={styles.label}>{listItem.label}</Text>
              </TouchableOpacity>
            ))}

          </View>
        </ScrollView>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    justifyContent: "flex-end",
    margin: 0,
    width: "100%",
    height: "100%",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: "100%",
  },
  modalTitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 12,
    fontFamily: "Inter_400Regular",
  },
  input: {
    marginBottom: 24,
  },
  blocks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  block: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  label: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 16,
    fontFamily: "Inter_400Regular",
  },
});

export default ModalSearchFilter;
