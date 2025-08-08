import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import { Colors } from "@/shared/constStyle";
import Input from "@/components/Input";
import ModalSmall from "@/components/ModalSmall";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import { FilterOption } from "@/models/search/types";
import { useTranslation } from "react-i18next";

type Props = {
  modalVisible: boolean;
  searchText: string;
  optionsAll: FilterOption[];
  options: FilterOption[];
  title: string;
  select: FilterOption[];
  isLoading: boolean;
  setModalVisible: (param: boolean) => void;
  onChangeSearchText: (param: string) => void;
  onSelect: (param: FilterOption[]) => void;
};

const ModalFilterCurrentMulti = ({
  modalVisible,
  searchText,
  optionsAll = [],
  options = [],
  title = "",
  select,
  isLoading,
  setModalVisible,
  onChangeSearchText,
  onSelect,
}: Props) => {
  const { t } = useTranslation();
  const [selectElements, setSelectElements] = useState<FilterOption[]>(
    select || []
  );
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (modalVisible) {
      // Даем небольшой таймаут для корректного отображения модалки
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        if (searchText) {
          inputRef.current?.setNativeProps?.({
            selection: { start: searchText.length, end: searchText.length },
          });
        }
      }, 5);

      return () => clearTimeout(timer);
    }
  }, [modalVisible]);

  useEffect(() => {
    const keyboardListener = Keyboard.addListener("keyboardDidHide", () => {
      if (modalVisible) {
        inputRef.current?.focus();
      }
    });

    return () => {
      keyboardListener.remove();
    };
  }, [modalVisible]);

  const isSelectAll = selectElements.length === optionsAll.length;

  const searchOnBlock = () => {
    Keyboard.dismiss();
    setModalVisible(false);
  };

  const handleSelectElement = (param: FilterOption) => {
    if (selectElements.some((element) => element.id === param.id)) {
      setSelectElements(
        selectElements.filter((element) => element.id !== param.id)
      );
      return;
    }

    const arr = [...selectElements];
    arr.push(param);
    setSelectElements(arr);
  };

  const handleSelectAll = () => {
    if (isSelectAll) {
      setSelectElements([]);
      return;
    }

    setSelectElements(optionsAll);
  };

  return (
    <ModalSmall
      modalVisible={modalVisible}
      title={t(title)}
      setModalVisible={searchOnBlock}
      bottomContent={
        <Button
          title={t("select")}
          filled={true}
          onPress={() => {
            searchOnBlock();
            onSelect(selectElements);
          }}
          style={styles.button}
        />
      }
    >
      <View style={styles.search}>
        <Input
          ref={inputRef}
          autoFocus={true}
          returnKeyType="search"
          blurOnSubmit={false}
          placeholder={t("titleSearch")}
          value={searchText}
          onChangeText={(param) => onChangeSearchText(param)}
          isSearch
          isLoading={isLoading}
          deleteText={() => onChangeSearchText("")}
        />
      </View>

      <View style={styles.checkedAll}>
        <Checkbox
          label={t("selectAll")}
          checked={isSelectAll}
          onClick={handleSelectAll}
        />
      </View>

      <View style={styles.list}>
        {options.map((option) => (
          <View key={option.id} style={styles.option}>
            <Checkbox
              label={option.name}
              checked={selectElements.some(
                (element) => element.id === option.id
              )}
              onClick={() => handleSelectElement(option)}
            />
          </View>
        ))}
      </View>
    </ModalSmall>
  );
};

const styles = StyleSheet.create({
  search: {
    marginBottom: 24,
  },
  checkedAll: {
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: Colors.GrayColor2,
  },
  list: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  option: {
    width: "100%",
    marginBottom: 5,
  },
  button: {
    marginTop: 16,
    width: "100%",
  },
});

export default ModalFilterCurrentMulti;
