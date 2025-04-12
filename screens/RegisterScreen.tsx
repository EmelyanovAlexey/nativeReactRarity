import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { useUnit } from "effector-react";
import { registerFx } from "../models/auth";
import { Colors } from "../shared/constStyle";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";
import Input from "@/components/Input";

import Logo from "@/assets/images/logo.svg";
import Google from "@/components/Icons/Google";

export default function RegisterScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const register = useUnit(registerFx);

  const handleRegister = async () => {
    try {
      await register({ email, password });
      navigation.navigate("Home");
    } catch (err: any) {
      Alert.alert("Ошибка", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Logo width={200} height={120} style={styles.reactLogo} />
      <Text style={styles.description}>{t("registerText")}</Text>

      <View style={styles.input}>
        <Input
          placeholder={t("enterEmail")}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.input}>
        <Input
          placeholder={t("enterPassword")}
          value={password}
          onChangeText={setPassword}
          isPassword
        />
      </View>

      <View style={styles.input}>
        <Input
          placeholder={t("enterPasswordRepeat")}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          isPassword
        />
      </View>

      <View style={styles.error}>
        <Text style={styles.textError}>{t("passwordNotCorrect")}</Text>
      </View>

      <Text style={styles.textSeparation}>{t("or")}</Text>

      <Button
        title={t("registerGoogle")}
        filled={false}
        style={styles.button}
        leftContent={<Google />}
        onPress={() => navigation.navigate("register")}
      />
      <Button
        title={t("register")}
        filled={true}
        style={styles.button}
        onPress={() => navigation.navigate("login")}
        disabled
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
  input: {
    marginBottom: 12,
    width: "100%",
  },
  button: {
    width: "100%",
  },
  textSeparation: {
    fontSize: 18,
    color: Colors.GrayColor,
    fontWeight: 600,
    marginBottom: 24,
    marginTop: 12,
  },
  error: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textError: {
    color: Colors.RedColor,
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 12,
  },
});
