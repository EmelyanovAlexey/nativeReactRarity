import { View, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import i18n from "i18next"; // менять язык

import Button from "@/components/Button";

import Logo from "@/assets/images/logo.svg";
import { Colors } from "../shared/constStyle";

export default function LoginScreen({ navigation }: any) {
  i18n.changeLanguage("ru"); // или 'en' // менять язык
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Logo width={200} height={120} style={styles.reactLogo} />
      <Text style={styles.description}>{t("startLogin")}</Text>

      <Button
        title={t("register")}
        filled={true}
        style={styles.button}
        onPress={() => navigation.navigate("register")}
      />
      <Button
        title={t("login")}
        filled={false}
        style={styles.button}
        onPress={() => navigation.navigate("login")}
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
  },
  reactLogo: {
    justifyContent: "center",
    marginBottom: 24,
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
    width: "100%",
  },
});
