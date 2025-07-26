import { View, StyleSheet, Linking } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";

import Telegram from "@/components/Icons/Telegram";
import YouTube from "@/components/Icons/YouTube";
import Button from "@/components/Button";
import HeaderPage from "@/components/HeaderPage";

export default function LearnMaterialScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <HeaderPage style={styles.header} title={t("trainingMaterials")} />

      <Button
        title="Фарфоровые сокровища. Драгоценная посуда."
        style={styles.btn}
        textStyle={styles.btnText}
        leftContent={<Telegram />}
        onPress={() => Linking.openURL("https://t.me/porcelain_treasures")}
      />

      <Button
        title="Фарфоровые сокровища."
        style={styles.btn}
        textStyle={styles.btnText}
        leftContent={<YouTube />}
        onPress={() =>
          Linking.openURL("https://www.youtube.com/@antique_vintage")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.BgcColor,
  },
  header: {
    marginBottom: 12,
  },
  btn: {
    width: "100%",
    backgroundColor: Colors.GrayColor3,
    borderColor: Colors.GrayColor3,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 14,
  },
  btnText: {
    color: Colors.BlackColor,
    textAlign: "left",
    fontWeight: 600,
  },
});
