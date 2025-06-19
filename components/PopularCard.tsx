import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
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
      <View style={styles.borderedContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
          <View style={styles.starIcon}>
            <Start
              stroke={item.is_favourite ? Colors.GrayColor : Colors.Primary}
              fill={item.is_favourite ? Colors.Primary : Colors.Transparent}
            />
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.description}
        </Text>
        <Text style={styles.year} numberOfLines={1} ellipsizeMode="tail">
          {item.year_from} - {item.year_to}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WhiteColor,
    flex: 1,
    padding: 2,
  },
  borderedContainer: {
    aspectRatio: 1,
    backgroundColor: Colors.WhiteColor,
    overflow: "hidden",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
    elevation: 2,
  },
  imageContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: Colors.WhiteColor,
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  starIcon: {
    position: "absolute",
    top: 8,
    right: 5,
    borderRadius: 16,
    padding: 4,
  },
  textContainer: {
    padding: 8,
    flex: 1,
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: "Inter_400Regular",
  },
  year: {
    fontSize: 14,
    fontWeight: 400,
    color: Colors.GrayColor,
    textAlign: "left",
    fontFamily: "Inter_400Regular",
    marginTop: 4,
  },
});

export default PopularCard;
