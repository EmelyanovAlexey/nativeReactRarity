import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
} from "react-native";
import Button from "@/components/Button";
import { Colors } from "@/shared/constStyle";
import Input from "@/components/Input";
import ModalSmall from "@/components/ModalSmall";
import Cross from "@/components/Icons/Cross";
import {
  SearchParamType,
  FilterOption,
  TypeFilter,
} from "../models/search/types";

import { useTranslation } from "react-i18next";

type Props = {
  modalVisible: boolean;
  searchText: string;
  style?: ViewStyle;
  paramsFilter: SearchParamType;
  isLoading: boolean;
  selectedParam: {
    selectedCountries: FilterOption | null;
    selectedManufacturers: FilterOption | null;
    selectedSymbol: FilterOption | null;
  };
  setModalVisible: (param: boolean) => void;
  onChangeSearchText: (param: string) => void;
  onClickParam: (type: TypeFilter, param: string) => void;
};

const ModalSearch = ({
  style,
  modalVisible = false,
  searchText,
  paramsFilter,
  isLoading,
  selectedParam,
  setModalVisible,
  onChangeSearchText,
  onClickParam,
}: Props) => {
  const { t } = useTranslation();
  const windowHeight = Dimensions.get("window").height;

  const variables = [
    {
      label: "Близкие варианты",
      type: TypeFilter.symbol,
      values: paramsFilter.symbols || [],
    },
    // {
    //   label: "Производители",
    //   type: TypeFilter.manufacturer,
    //   values: paramsFilter.manufacturers || [],
    // },
    // {
    //   label: "Страны",
    //   type: TypeFilter.country,
    //   values: paramsFilter.countries || [],
    // },
  ];

  // узнать активный ли фильтр
  function isParamActive(param: string) {
    if (param === selectedParam.selectedCountries?.name) {
      return true;
    }

    if (param === selectedParam.selectedManufacturers?.name) {
      return true;
    }

    if (param === selectedParam.selectedSymbol?.name) {
      return true;
    }

    return false;
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.overlay}>
        <View
          style={[styles.modalContainer, { marginTop: windowHeight * 0.1 }]}
        >
          <View style={[styles.modal, style]}>
            <View style={styles.header}>
              <Text style={styles.modalTitle}>{t("titleSearch")}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Cross />
              </TouchableOpacity>
            </View>

            <View style={styles.input}>
              <Input
                placeholder={t("titleSearch")}
                value={searchText}
                onChangeText={(param) => onChangeSearchText(param)}
                isSearch
                deleteText={() => onChangeSearchText("")}
                isLoading={isLoading}
              />
            </View>

            <ScrollView
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={true}
              contentContainerStyle={styles.scrollContent}
            >
              {variables.map((variable) => (
                <View style={styles.block} key={variable.label}>
                  <Text style={styles.label}>{variable.label}</Text>
                  <View style={styles.blockList}>
                    {variable.values.map((valueItem) => (
                      <TouchableOpacity
                        onPress={() => onClickParam(variable.type, valueItem)}
                        key={valueItem}
                      >
                        <Text
                          style={[
                            styles.valueText,
                            isParamActive(valueItem) && styles.activeParam,
                          ]}
                        >
                          {valueItem}
                        </Text>
                      </TouchableOpacity>
                    ))}
                    {variable.values.length === 0 && (
                      <Text style={styles.valueTextNotFind}>Не найдено</Text>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>

            <Button
              title={t("titleSearch")}
              filled={true}
              onPress={() => setModalVisible(false)}
              style={styles.button}
            />
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
    paddingHorizontal: 20,
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

  body: {
    width: "100%",
  },
  //
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  input: {
    marginBottom: 16,
  },
  scrollWrapper: {
    flex: 1,
    minHeight: 100,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  block: {
    marginBottom: 24,
  },
  label: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 12,
    fontFamily: "Inter_400Regular",
  },
  blockList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  valueText: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: Colors.GrayColor3,
    color: Colors.BlackColor,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  valueTextNotFind: {
    color: Colors.GrayColor,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  button: {
    marginTop: 16,
  },
  activeParam: {
    backgroundColor: Colors.Primary2,
    color: Colors.Primary,
  },
});

export default ModalSearch;

// прошлый вариант

// <Modal
//   isVisible={modalVisible}
//   onSwipeComplete={() => setModalVisible(false)}
//   swipeDirection="down"
//   onBackdropPress={() => setModalVisible(false)}
//   style={[styles.modal, style]}
//   propagateSwipe
//   scrollTo={(p) => scrollViewRef.current?.scrollTo(p)}
//   scrollOffset={scrollOffset}
//   scrollOffsetMax={500}
// >
//   <View style={styles.modalContent}>
//     <View style={styles.modalHeaderIndicator} />

//     <Text style={styles.modalTitle}>{t("titleSearch")}</Text>

//     <View style={styles.input}>
//       <Input
//         placeholder={t("titleSearch")}
//         value={searchText}
//         onChangeText={(param) => onChangeSearchText(param)}
//         isSearch
//         deleteText={() => onChangeSearchText("")}
//         isLoading={isLoading}
//       />
//     </View>

//     <ScrollView
//       ref={scrollViewRef}
//       onScroll={handleScroll}
//       scrollEventThrottle={16}
//       showsVerticalScrollIndicator={false}
//     >
//       <View style={styles.blocks}>
//         {variables.map((variable) => (
//           <View style={styles.block} key={variable.label}>
//             <Text style={styles.label}>{variable.label}</Text>
//             <View style={styles.blockList}>
//               {variable.values.map((valueItem) => (
//                 <TouchableOpacity
//                   onPress={() => {
//                     onClickParam(variable.type, valueItem);
//                   }}
//                   key={valueItem}
//                   // style={}
//                 >
//                   <Text
//                     style={[
//                       styles.valueText,
//                       isParamActive(valueItem) && styles.activeParam,
//                     ]}
//                   >
//                     {valueItem}
//                   </Text>
//                 </TouchableOpacity>
//               ))}

//               {variable.values.length === 0 && (
//                 <Text style={styles.valueTextNotFind}>Не найдено</Text>
//               )}
//             </View>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   </View>
// </Modal>

// modal: {
//   justifyContent: "flex-end",
//   margin: 0,
//   width: "100%",
//   zIndex: 100,
// },
// modalContent: {
//   backgroundColor: "#fff",
//   borderTopLeftRadius: 24,
//   borderTopRightRadius: 24,
//   padding: 20,
//   height: "50%",
//   maxHeight: "50%", // Ограничение максимальной высоты
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
