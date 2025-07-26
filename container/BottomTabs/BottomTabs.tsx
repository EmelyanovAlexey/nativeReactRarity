import React from "react";
import { View, StyleSheet } from "react-native";
import CustomTabBar from "../../components/CustomTabBar";
import useBottomTabs from "./useBottomTabs";

export default function BottomTabs() {
  const { activeTab, handleSetActiveTab, renderScreen } = useBottomTabs();

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <View style={styles.btn}>
        <CustomTabBar activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      </View>
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
  btn: {},
});
