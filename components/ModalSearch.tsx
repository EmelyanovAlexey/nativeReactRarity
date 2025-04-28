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

const ModalSearch = ({
  style,
  modalVisible = false,
  searchText,
  setModalVisible,
  onChangeSearchText,
}: Props) => {
  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const searchOnBlock = () => {
    setModalVisible(false);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const variables = [
    {
      label: "Близкие варианты",
      values: ["Гербовидный", "Геройский", "Герцогский", "Герметичный", "Гермлингтонская Ветвь"]
    },
    {
      label: "Производители",
      values: ["Производитель 1", "Производитель 2"]
    },
    {
      label: "Страны",
      values: ["Страна 1", "Страна 2"]
    }
  ];

  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection="down"
      onBackdropPress={() => setModalVisible(false)}
      style={[styles.modal, style]}
      propagateSwipe
      scrollTo={(p) => scrollViewRef.current?.scrollTo(p)}
      scrollOffset={scrollOffset}
      scrollOffsetMax={500} // можно подогнать по контенту
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeaderIndicator} />

        <Text style={styles.modalTitle}>{t("titleSearch")}</Text>

        <View style={styles.input}>
          <Input placeholder={t("titleSearch")}
            value={searchText}
            onChangeText={(param)=>onChangeSearchText(param)}
            isSearch />
        </View>

        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.blocks}>
            {variables.map((variable) => (
              <View style={styles.block} key={variable.label}>
              <Text style={styles.label}>{variable.label}</Text>
              <View style={styles.blockList}>
                {variable.values.map((valueItem) => (
                  <TouchableOpacity
                    onPress={()=>{
                      onChangeSearchText(valueItem);
                      searchOnBlock();
                    }}
                    style={styles.value}
                    key={valueItem}
                  >
                    {valueItem}
                 </TouchableOpacity>
                ))}
              </View>
            </View>
            ))}

          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    width: "100%",
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
  blockList: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  value: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Inter_400Regular",
  },
});

export default ModalSearch;
