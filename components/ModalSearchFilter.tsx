import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Colors } from "@/shared/constStyle";
import Сhevron from "@/components/Icons/Сhevron";
import Arrow from "@/components/Icons/Arrow";
import Chips from "@/components/Chips";
import Button from "@/components/Button";

import { FilterRoot, TypeFilter } from "@/models/search/types";

import { useTranslation } from "react-i18next";

type Props = {
  style?: ViewStyle;
  list: FilterRoot[];
  setModalVisible: (param: boolean) => void;
  onSelectFilter: (param: TypeFilter) => void;
  handleDelete: (param: TypeFilter) => void;
  resetFilter: () => void;
};

const ModalSearchFilter = ({
  style,
  list,
  setModalVisible,
  onSelectFilter,
  handleDelete,
  resetFilter,
}: Props) => {
  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={[styles.modal, style]}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <View style={styles.arrow}>
                <Arrow />
              </View>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>{t("titleFilter")}</Text>
          </View>

          <ScrollView
            ref={scrollViewRef}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.blocks}>
              {list.map((listItem) => (
                <TouchableOpacity
                  onPress={() => onSelectFilter(listItem.id)}
                  style={styles.block}
                  key={listItem.id}
                >
                  {listItem.select !== null ? (
                    <Chips
                      text={listItem.select.name}
                      maxLength={25}
                      onPress={() => handleDelete(listItem.id)}
                    />
                  ) : (
                    <Text
                      style={[
                        styles.label,
                        listItem.select !== null && styles.select,
                      ]}
                    >
                      {t(listItem.name)}
                    </Text>
                  )}

                  <Сhevron />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <View>
            <Button
              title={t("apply")}
              filled={true}
              onPress={() => setModalVisible(false)}
            />

            <Button
              title={t("throwOff")}
              filled={false}
              onPress={() => resetFilter()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: "absolute",
    justifyContent: "flex-end",
    margin: 0,
    width: "100%",
    height: "100%",
    zIndex: 100000,
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
    height: 60,
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
  scrollContent: {
    paddingBottom: 100, // Чтобы контент не заезжал под кнопки
  },
});

export default ModalSearchFilter;
