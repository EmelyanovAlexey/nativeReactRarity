import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ViewStyle,
} from "react-native";
import Start from "@/components/Icons/Start";
import { Colors } from "@/shared/constStyle";
import { CardType } from "@/models/home/types";

type Props = {
  style?: ViewStyle;
  item: CardType;
  onPress: () => void;
};

const PopularCard = ({ style, item, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.starIcon}>
          <Start
            stroke={item.is_favourite ? Colors.GrayColor : Colors.Primary}
            fill={item.is_favourite ? Colors.Primary : Colors.Transparent}
          />
        </View>
      </View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text numberOfLines={1} style={styles.description}>
        {item.date_from} - {item.date_to}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.WhiteColor,
    overflow: "hidden",
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 185,
    borderRadius: 16,
    marginBottom: 5,
  },
  starIcon: {
    position: "absolute",
    top: 8,
    right: 5,
    borderRadius: 16,
    padding: 4,
  },
  title: {
    fontWeight: 600,
    fontSize: 16,
    marginTop: 5,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: "Inter_400Regular",
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    color: Colors.GrayColor,
    textAlign: "left",
    fontFamily: "Inter_400Regular",
  },
});

export default PopularCard;
