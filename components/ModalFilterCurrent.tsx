import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/shared/constStyle";
import ModalSmall from "@/components/ModalSmall";
import Spinner from "@/components/Spinner";

import { FilterOption } from "@/models/search/types";

import { useTranslation } from "react-i18next";

type Props = {
  style?: ViewStyle;
  modalVisible: boolean;
  searchText: string;
  options: FilterOption[];
  title: string;
  select: FilterOption[];
  isLoading: boolean;
  setModalVisible: (param: boolean) => void;
  onChangeSearchText: (param: string) => void;
  onSelect: (param: FilterOption[]) => void;
};

const ModalFilterCurrent = ({
  options = [],
  title = "",
  select,
  isLoading,
  setModalVisible,
  onSelect,
}: Props) => {
  const { t } = useTranslation();

  const searchOnBlock = () => {
    setModalVisible(false);
  };

  return (
    <ModalSmall title={t(title)} setModalVisible={searchOnBlock}>
      <View style={styles.list}>
        {options.map((option) => (
          <TouchableOpacity
            onPress={() => {
              onSelect([option]);
              searchOnBlock();
            }}
            style={styles.option}
            key={option.id}
          >
            <Text
              style={[
                styles.optionText,
                select[0]?.id === option.id && styles.optionTextSelect,
              ]}
            >
              {option.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {isLoading && (
        <View style={styles.loading}>
          <Spinner />
        </View>
      )}
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
  loading: {
    display: "flex",
    alignItems: "center",
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
