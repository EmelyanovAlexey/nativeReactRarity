import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  icon?: any; // require("./path/to/icon.png")
  disabled?: boolean;
  filled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Button: React.FC<AppButtonProps> = ({
  title,
  onPress,
  filled = true,
  disabled = false,
  icon,
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
      {icon && <Image source={icon} style={styles.icon} />}
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
    display: "flex",
  },
  filled: {
    backgroundColor: "#247B7B",
    borderColor: "#247B7B",
  },
  outlined: {
    backgroundColor: "#F4F4F4",
    borderColor: "#F4F4F4",
  },
  disabledButton: {
    backgroundColor: "#F4F4F4",
    borderColor: "#F4F4F4",
  },
  disabledText: {
    color: "#989B9E",
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
    // fontFamily: Inter;
    fontWeight: 700,
  },
  filledText: {
    color: "#fff",
  },
  outlinedText: {
    color: "#000",
  },
});

export default Button;
