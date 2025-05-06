import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
} from "react-native";
import { Colors } from "../shared/constStyle";
import Search from "@/components/Icons/Search";
import Cross from "@/components/Icons/Cross";
import Filter from "@/components/Icons/Filter";

type SearchBlockProps = {
  text: string;
  style?: ViewStyle;
  leftContent?: React.ReactNode;
  onPress: () => void;
  onPressDelete: () => void;
  onPressFilter: () => void;
};

const SearchBlock: React.FC<SearchBlockProps> = ({
  text = "",
  leftContent,
  style,
  onPress,
  onPressDelete,
  onPressFilter,
}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={[styles.search, style]} onPress={onPress}>
        <View style={styles.contentWrapper}>
          {leftContent ? (
            <View>{leftContent}</View>
          ) : (
            <Search width="22" height="22" stroke={Colors.GrayColor} />
          )}

          <Text
            style={[styles.text, text === "" && styles.placeholder]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {text !== "" ? text : "Поиск"}
          </Text>

          {text !== "" && (
            <TouchableOpacity style={[styles.delete]} onPress={onPressDelete}>
              <Cross />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>

      {/* {!leftContent && ( */}
      <TouchableOpacity style={[styles.filter, style]} onPress={onPressFilter}>
        <View style={styles.filterIcon}>
          <Filter />
        </View>
      </TouchableOpacity>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  text: {
    width: "70%",
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0,
    fontFamily: "Inter_400Regular",
    fontWeight: 500,
  },
  placeholder: {
    width: "86%",
    color: Colors.GrayColor,
  },

  search: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: Colors.GrayColor4,
    borderRadius: 16,
    padding: 10,
    paddingRight: 5,
    paddingLeft: 10,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  delete: {
    padding: 10,
  },

  filter: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: Colors.GrayColor4,
    position: "relative",
  },
  filterIcon: {
    position: "absolute",
    left: 17,
    top: 18,
  },
});

export default SearchBlock;
