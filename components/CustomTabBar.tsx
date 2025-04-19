import React from "react";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

import Stars from "@/components/Icons/Starts";
import Search from "@/components/Icons/Search";
import User from "@/components/Icons/User";

import { Colors } from "@/shared/constStyle";
import { ActiveTab } from "@/models/main/types";

type Props = {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
};

const CustomTabBar = ({ activeTab, setActiveTab }: Props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setActiveTab(ActiveTab.home)}
      >
        <Stars
          stroke={
            activeTab === ActiveTab.home ? Colors.Primary : Colors.BlackColor
          }
        />

        <Text
          style={[
            styles.text,
            activeTab === ActiveTab.home && styles.textActive,
          ]}
        >
          {t("popular")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setActiveTab(ActiveTab.search)}
      >
        <Search
          stroke={
            activeTab === ActiveTab.search ? Colors.Primary : Colors.BlackColor
          }
        />
        <Text
          style={[
            styles.text,
            activeTab === ActiveTab.search && styles.textActive,
          ]}
        >
          {t("search")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setActiveTab(ActiveTab.profile)}
      >
        <User
          stroke={
            activeTab === ActiveTab.profile ? Colors.Primary : Colors.BlackColor
          }
        />
        <Text
          style={[
            styles.text,
            activeTab === ActiveTab.profile && styles.textActive,
          ]}
        >
          {t("profile")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 6,
    backgroundColor: Colors.WhiteColor,
    borderTopWidth: 1,
    borderTopColor: Colors.GrayColor2,
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Inter_400Regular",
  },
  textActive: {
    color: Colors.Primary,
  },
});

export default CustomTabBar;
