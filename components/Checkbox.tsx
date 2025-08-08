import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@/components/Icons/CheckBox";
import CheckBoxSelected from "@/components/Icons/CheckBoxSelected";

import { Colors } from "../shared/constStyle";

type SpinnerProps = {
  style?: ViewStyle;
  checked: boolean;
  label: string;
  onClick: () => void;
};

const Checkbox: React.FC<SpinnerProps> = ({
  style,
  checked,
  label,
  onClick,
}) => {
  return (
    <View style={[styles.checkbox, style]}>
      <TouchableOpacity style={styles.btn} onPress={onClick}>
        {checked ? <CheckBoxSelected /> : <CheckBox />}
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: -6,
  },
  btn: {},
  label: {
    fontSize: 16,
    fontWeight: 500,
    fontFamily: "Inter_400Regular",
  },
});

export default Checkbox;
