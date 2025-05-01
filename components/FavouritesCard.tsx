import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
  Dimensions,
} from "react-native";
import Start from "@/components/Icons/Start";
import { Colors } from "@/shared/constStyle";
import { CardType } from "@/models/home/types";

type Props = {
  style?: ViewStyle;
  item: CardType;
  onPress: () => void;
};

const FavouritesCard = ({ style, item, onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.description}>
          {item.dateFrom} - {item.dateTo}
        </Text>
      </View>

      <View style={styles.starIcon}>
        <Start
          stroke={item.isStar ? Colors.GrayColor : Colors.Primary}
          fill={item.isStar ? Colors.Primary : Colors.Transparent}
        />
      </View>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get("window").width;
const calculatedWidth = screenWidth - 64 - 70;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.WhiteColor,
    overflow: "hidden",
    elevation: 2,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 8,
  },
  starIcon: {
    borderRadius: 16,
    padding: 4,
  },
  info: {
    width: calculatedWidth,
    minWidth: calculatedWidth,
    marginRight: 3,
  },
  title: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: "Inter_400Regular",
    marginBottom: 8,
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    color: Colors.GrayColor,
    textAlign: "left",
    fontFamily: "Inter_400Regular",
  },
});

export default FavouritesCard;
