import React from "react";
import { View, StyleSheet } from "react-native";
import CustomTabBar from "../../components/CustomTabBar";
import useBottomTabs from "./useBottomTabs";

export default function BottomTabs() {
  const { activeTab, handleSetActiveTab, renderScreen } = useBottomTabs();

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <CustomTabBar activeTab={activeTab} setActiveTab={handleSetActiveTab} />
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
