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

const width = Dimensions.get("window").width;

type Props = {
  style?: ViewStyle;
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
    dateTo: string;
    dateFrom: string;
    isStar: boolean;
  };
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
            stroke={item.isStar ? Colors.GrayColor : Colors.Primary}
            fill={item.isStar ? Colors.Primary : Colors.Transparent}
          />
        </View>
      </View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text numberOfLines={1} style={styles.description}>
        {item.dateFrom} - {item.dateTo}
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
  },
  starIcon: {
    position: "absolute",
    top: 8,
    right: 5,
    // backgroundColor: Colors.BlackColor,
    borderRadius: 16,
    padding: 4,
  },
  title: {
    fontWeight: 600,
    fontSize: 16,
    marginTop: 5,
    lineHeight: 18,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    fontWeight: 500,
    color: Colors.GrayColor,
    textAlign: "left",
  },
});

export default PopularCard;
