import { View, StyleSheet } from "react-native";
import { Colors } from "@/shared/constStyle";
import useSearchScreen from "./useSearchScreen";

import Photo from "@/components/Icons/Photo";
import Button from "@/components/Button";
import SearchFilterContainer from "@/container/SearchFilter";
import ModalSearchContainer from "@/container/ModalSearch";
import ModalSearchFilterContainer from "@/container/ModalSearchFilter";

export default function SearchScreen() {
  const { handleStartScan } = useSearchScreen();

  return (
    <View style={styles.container}>
      <SearchFilterContainer />
      <ModalSearchContainer />
      <ModalSearchFilterContainer />

      <Button
        filled={true}
        style={styles.button}
        leftContent={<Photo />}
        onPress={handleStartScan}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 24,
    backgroundColor: Colors.BgcColor,
    width: "100%",
    height: "100%",
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
  },
  button: {
    position: "fixed",
    paddingVertical: 14,
    paddingHorizontal: 13,
    right: 16,
    bottom: 70,
  },
});
