import { View, StyleSheet, Text, Image } from "react-native";
import { Colors } from "../shared/constStyle";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.BgcColor,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
  },
});
