import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
} from "react-native";
import { Colors } from "../shared/constStyle";
import Cross from "@/components/Icons/Cross";

type ChipsProps = {
  text: string;
  style?: ViewStyle;
  onPress: () => void;
};

const Chips: React.FC<ChipsProps> = ({ text = "", style, onPress }) => {
  return (
    <View style={[styles.root, style]}>
      <Text style={[styles.text]}>{text}</Text>

      <TouchableOpacity style={styles.delete} onPress={onPress}>
        <View style={styles.filterIcon}>
          <Cross stroke={Colors.Primary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.Primary2,
    borderRadius: 16,
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 4,
  },

  text: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    fontFamily: "Inter_400Regular",
    fontWeight: 500,
    color: Colors.Primary,
  },

  delete: {
    padding: 8,
  },
  filterIcon: {},
});

export default Chips;
