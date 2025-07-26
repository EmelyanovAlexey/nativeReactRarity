import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../shared/constStyle";
import HeaderPage from "@/components/HeaderPage";
import { HeaderType } from "@/components/HeaderPage";

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <HeaderPage style={styles.header} type={HeaderType.showArrowHelp} />
      <Text style={styles.description}>HELP</Text>
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
  header: {
    position: "absolute",
    top: 10,
    width: "90%",
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
