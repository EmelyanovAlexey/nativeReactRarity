import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";
import useFinishRegisterScreen from "./useFinishRegisterScreen";

import Link from "@/components/Link";

export default function FinishRegisterScreen({ navigation }: any) {
  const { t } = useTranslation();
  const { isActive, time } = useFinishRegisterScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{t("finishRegisterText")}</Text>
      <Text style={styles.time}>{time}</Text>
      <Link to="help" textStyle={{ fontSize: 14 }} disabled={!isActive}>
        {t("notSendOnEmail")}
      </Link>
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
  time: {
    fontSize: 14,
    fontWeight: 600,
    color: Colors.Primary,
  },
});
