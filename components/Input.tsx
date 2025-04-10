import React, { useState } from "react";
import {
  View,
  ViewStyle,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import { Colors } from "../shared/constStyle";
import EyeClosed from "@/components/Icons/EyeClosed";
import EyeOpen from "@/components/Icons/EyeOpen";

type AppInputProps = {
  isError?: boolean;
  isPassword?: boolean;
  style?: ViewStyle;
};

export function Input(props: TextInputProps & AppInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        style={[styles.input, styles.error, props.style]}
        secureTextEntry={props.isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.GrayColor}
        {...props}
      />
      {props.isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible((state) => !state)}
          style={styles.eyeIcon}
        >
          {isPasswordVisible ? <EyeOpen /> : <EyeClosed />}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: Colors.Secondary,
    borderColor: Colors.Secondary,
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 500,
    paddingHorizontal: 10,
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
});

export default Input;
