import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "@/navigation/types";
import { Colors } from "@/shared/constStyle";

type LinkProps = {
  to: string; // название экрана
  children: React.ReactNode; // текст ссылки или любой контент
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

const Link: React.FC<LinkProps> = ({
  to,
  children,
  disabled,
  style,
  textStyle,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[style, disabled && styles.disabledButton]}
      onPress={() => navigation.navigate(to)}
      disabled={disabled}
    >
      {typeof children === "string" || typeof children === "number" ? (
        <Text style={[styles.text, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.Primary,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Inter_400Regular",
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default Link;
