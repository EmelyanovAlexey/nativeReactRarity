import { View, StyleSheet, Text, Alert } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";
import useChangeLanguageScreen from "./useChangeLanguageScreen";

import Button from "@/components/Button";
import HeaderPage from "@/components/HeaderPage";

export default function ChangeLanguageScreen() {
  const { t } = useTranslation();
  const { language, handleSetLanguage } = useChangeLanguageScreen();

  return (
    <View style={styles.container}>
      <HeaderPage style={styles.header} title={t("changeLanguage")} />

      <Text style={styles.description}>{t("changeLanguageText")}</Text>

      <Button
        title="Русский"
        filled={language === "ru"}
        style={styles.btn}
        onPress={() => handleSetLanguage("ru")}
      />

      <Button
        title="English"
        filled={language === "en"}
        style={styles.btn}
        onPress={() => handleSetLanguage("en")}
      />
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
    paddingTop: 30,
  },
  header: {
    position: "absolute",
    top: 10,
    width: "90%",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: "Inter_400Regular",
    color: Colors.GrayColor,
  },
  btn: {
    width: "100%",
  },
});
