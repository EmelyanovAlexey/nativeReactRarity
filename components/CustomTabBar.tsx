import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Stars from "@/components/Icons/Starts";
import Search from "@/components/Icons/Search";
import User from "@/components/Icons/User";
import { Colors } from "@/shared/constStyle";
import { useTranslation } from "react-i18next";

type Props = {
  activeTab: string;
  setActiveTab: (tab: "home" | "search" | "profile") => void;
};

const CustomTabBar = ({ activeTab, setActiveTab }: Props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setActiveTab("home")}
      >
        <Stars
          stroke={activeTab === "home" ? Colors.Primary : Colors.BlackColor}
        />

        <Text style={[styles.text, activeTab === "home" && styles.textActive]}>
          {t("popular")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setActiveTab("search")}
      >
        <Search
          stroke={activeTab === "search" ? Colors.Primary : Colors.BlackColor}
        />
        <Text
          style={[styles.text, activeTab === "search" && styles.textActive]}
        >
          {t("search")}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setActiveTab("profile")}
      >
        <User
          stroke={activeTab === "profile" ? Colors.Primary : Colors.BlackColor}
        />
        <Text
          style={[styles.text, activeTab === "profile" && styles.textActive]}
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
