import { View, StyleSheet } from "react-native";
import { Colors } from "@/shared/constStyle";
import useSearchScreen from "./useSearchScreen";

import SearchFilterСontainer from "@/container/SearchFilter";
import ModalSearchСontainer from '@/container/ModalSearch'
import ModalSearchFilterContainer from '@/container/ModalSearchFilter'

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchFilterСontainer />
      <ModalSearchСontainer />
      <ModalSearchFilterContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 24,
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
