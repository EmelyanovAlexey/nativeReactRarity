import React, { useState } from "react";
import {
  View,
  ViewStyle,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../shared/constStyle";
import EyeClosed from "@/components/Icons/EyeClosed";
import EyeOpen from "@/components/Icons/EyeOpen";
import Search from "@/components/Icons/Search";
import Cross from "@/components/Icons/Cross";

type AppInputProps = {
  isError?: boolean;
  isPassword?: boolean;
  style?: ViewStyle;
  isSearch?: boolean;
};

export function Input(props: TextInputProps & AppInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState(props.value); // Состояние для текста в инпуте

  // Функция для очистки инпута
  const handleClearInput = () => {
    setSearchValue("");
  };

  return (
    <View>
      {props.isSearch && <View style={styles.search}>
      <Search width="22" height="22" stroke={Colors.GrayColor} />
      </View>
    }

      <TextInput
        style={[
          styles.input,
          isFocused && styles.focused,
          props.isError && styles.error,
          props.isSearch && styles.searchInput,
          props.style,
        ]}
        underlineColorAndroid="transparent"
        secureTextEntry={props.isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.GrayColor}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        value={searchValue}
      />
      {props.isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible((state) => !state)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <EyeOpen /> : <EyeClosed />}
        </Pressable>
      )}

      {props.value !== "" && props.isSearch && (
        <TouchableOpacity style={[styles.delete]} onPress={handleClearInput}>
          <Cross />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    position: "absolute",
    left: 10,
    paddingVertical: 18,
  },
  input: {
    height: 58,
    backgroundColor: Colors.Secondary,
    borderColor: Colors.Secondary,
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 500,
    paddingHorizontal: 10,
    fontFamily: "Inter_400Regular",
  },
  searchInput: {
    paddingLeft: 40,
  },
  focused: {
    borderColor: Colors.Primary,
  },
  error: {
    borderColor: Colors.RedColor,
  },
  eyeIcon: {
    position: "absolute",
    right: 5,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  delete: {
    position: "absolute",
    right: 20,
    paddingVertical: 22,
  }
});

export default Input;
