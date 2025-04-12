import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "@/screens/HomeScreen";
import SearchScreen from "@/screens/SearchScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import CustomTabBar from "./CustomTabBar";

export default function BottomTabs() {
  const [activeTab, setActiveTab] = useState<"home" | "search" | "profile">(
    "home"
  );

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />;
      case "search":
        return <SearchScreen />;
      case "profile":
        return <ProfileScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <CustomTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
