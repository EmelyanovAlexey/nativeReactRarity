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
import Сhevron from "@/components/Icons/Сhevron";
import Arrow from "@/components/Icons/Arrow";

import { FilterRoot, TypeFilter } from "@/models/search/types";

import { useTranslation } from "react-i18next";

type Props = {
  style?: ViewStyle;
  list: FilterRoot[];
  setModalVisible: (param: boolean) => void;
  onSelectFilter: (param: TypeFilter) => void;
};

const ModalSearchFilter = ({
  style,
  list,
  setModalVisible,
  onSelectFilter,
}: Props) => {
  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={[styles.modal, style]}>
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.arrow}>
              <Arrow />
            </View>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Фильтры</Text>
        </View>

        <ScrollView
          ref={scrollViewRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.blocks}>
            {list.map((listItem) => (
              <TouchableOpacity
                onPress={() => onSelectFilter(listItem.id)}
                style={styles.block}
                key={listItem.id}
              >
                <Text
                  style={[
                    styles.label,
                    listItem.select !== null && styles.select,
                  ]}
                >
                  {listItem.select !== null
                    ? listItem.select.name
                    : t(listItem.name)}
                </Text>
                <Сhevron />
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
    position: "absolute",
    justifyContent: "flex-end",
    margin: 0,
    width: "100%",
    height: "100%",
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
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: Colors.GrayColor3,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  label: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.GrayColor,
    fontFamily: "Inter_400Regular",
  },
  select: {
    color: Colors.BlackColor,
  },
});

export default ModalSearchFilter;
