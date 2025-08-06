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
import ModalSmall from "@/components/ModalSmall";

import { FilterOption } from "@/models/search/types";

import { useTranslation } from "react-i18next";

type Props = {
  style?: ViewStyle;
  modalVisible: boolean;
  searchText: string;
  options: FilterOption[];
  title: string;
  select: FilterOption | null;
  isLoading: boolean;
  setModalVisible: (param: boolean) => void;
  onChangeSearchText: (param: string) => void;
  onSelect: (param: FilterOption) => void;
};

const ModalFilterCurrent = ({
  style,
  modalVisible = false,
  searchText,
  options = [],
  title = "",
  select,
  isLoading,
  setModalVisible,
  onChangeSearchText,
  onSelect,
}: Props) => {
  const { t } = useTranslation();
  // const scrollViewRef = useRef<ScrollView>(null);
  // const [scrollOffset, setScrollOffset] = useState(0);

  const searchOnBlock = () => {
    setModalVisible(false);
  };

  // const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   setScrollOffset(event.nativeEvent.contentOffset.y);
  // };

  return (
    <ModalSmall setModalVisible={searchOnBlock}>
      <View style={styles.list}>
        {options.map((option) => (
          <TouchableOpacity
            onPress={() => {
              onSelect(option);
              searchOnBlock();
            }}
            style={styles.option}
            key={option.id}
          >
            <Text
              style={[
                styles.optionText,
                select?.id === option.id && styles.optionTextSelect,
              ]}
            >
              {option.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ModalSmall>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  option: {
    width: "100%",
    paddingVertical: 10,
    marginBottom: 5,
  },
  optionText: {
    width: "100%",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Inter_400Regular",
    color: Colors.BlackColor2,
  },
  optionTextSelect: {
    color: Colors.Primary,
  },
});

export default ModalFilterCurrent;

// Прошлый вариант
// <Modal
//   isVisible={modalVisible}
//   onSwipeComplete={() => setModalVisible(false)}
//   swipeDirection="down"
//   onBackdropPress={() => setModalVisible(false)}
//   style={[styles.modal, style]}
//   propagateSwipe
//   scrollTo={(p) => scrollViewRef.current?.scrollTo(p)}
//   scrollOffset={scrollOffset}
//   scrollOffsetMax={500} // можно подогнать по контенту
// >
// <View style={styles.modalContent}>
//   <View style={styles.modalHeaderIndicator} />

//   <Text style={styles.modalTitle}>{t(title)}</Text>

//   <View style={styles.input}>
//     <Input
//       placeholder={t("titleSearch")}
//       value={searchText}
//       onChangeText={(param) => onChangeSearchText(param)}
//       isSearch
//       isLoading={isLoading}
//       deleteText={() => onChangeSearchText("")}
//     />
//   </View>

//   <ScrollView
//     ref={scrollViewRef}
//     onScroll={handleScroll}
//     scrollEventThrottle={16}
//     showsVerticalScrollIndicator={false}
//   >
// <View style={styles.list}>
//   {options.map((option) => (
//     <TouchableOpacity
//       onPress={() => {
//         onSelect(option);
//         searchOnBlock();
//       }}
//       style={styles.option}
//       key={option.id}
//     >
//       <Text
//         style={[
//           styles.optionText,
//           select?.id === option.id && styles.optionTextSelect,
//         ]}
//       >
//         {option.name}
//       </Text>
//     </TouchableOpacity>
//   ))}
// </View>
//   </ScrollView>
// </View>
// </Modal>

// modal: {
//   justifyContent: "flex-end",
//   margin: 0,
//   width: "100%",
// },
// modalContent: {
//   backgroundColor: "#fff",
//   borderTopLeftRadius: 24,
//   borderTopRightRadius: 24,
//   padding: 20,
//   height: "90%",
// },
// modalHeaderIndicator: {
//   width: 40,
//   height: 4,
//   borderRadius: 2,
//   backgroundColor: "#ccc",
//   alignSelf: "center",
//   marginBottom: 16,
// },
// modalTitle: {
//   fontWeight: 600,
//   fontSize: 20,
//   marginBottom: 12,
//   fontFamily: "Inter_400Regular",
// },
// input: {
//   marginBottom: 16,
// },
