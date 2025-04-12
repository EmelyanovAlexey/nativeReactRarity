import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/types";
import { Colors } from "@/shared/constStyle";

type LinkProps = {
  to: keyof RootStackParamList; // название экрана
  children: React.ReactNode; // текст ссылки или любой контент
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const Link: React.FC<LinkProps> = ({ to, children, style, textStyle }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate(to)}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.Primary,
    fontSize: 16,
    fontWeight: 600,
  },
});

export default Link;
