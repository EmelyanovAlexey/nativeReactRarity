import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import { Colors } from "../shared/constStyle";

type AppButtonProps = {
  title: string;
  disabled?: boolean;
  filled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  leftContent?: React.ReactNode;
  onPress: () => void;
};

const Button: React.FC<AppButtonProps> = ({
  title,
  onPress,
  filled = true,
  disabled = false,
  leftContent,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        filled ? styles.filled : styles.outlined,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.contentWrapper}>
        {leftContent && <View>{leftContent}</View>}
        <Text
          style={[
            styles.text,
            filled ? styles.filledText : styles.outlinedText,
            disabled && styles.disabledText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    alignItems: "center",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  filled: {
    backgroundColor: Colors.Primary,
    borderColor: Colors.Primary,
  },
  outlined: {
    backgroundColor: Colors.Secondary,
    borderColor: Colors.Secondary,
  },
  disabledButton: {
    backgroundColor: Colors.Secondary,
    borderColor: Colors.Secondary,
  },
  disabledText: {
    color: Colors.GrayColor,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: "Inter_400Regular",
    fontWeight: 700,
  },
  filledText: {
    color: Colors.WhiteColor,
    fontFamily: "Inter_400Regular",
  },
  outlinedText: {
    color: Colors.BlackColor,
    fontFamily: "Inter_400Regular",
  },
});

export default Button;
