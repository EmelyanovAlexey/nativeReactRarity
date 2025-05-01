import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "@/components/Link";

import Logo from "@/assets/images/logo.svg";
import Google from "@/components/Icons/Google";

import useLoginScreen from "./useLoginScreen";

export default function LoginScreen() {
  const { t } = useTranslation();
  const {
    email,
    password,
    isDisabledLogin,
    error,
    setEmail,
    setPassword,
    handleLogin,
  } = useLoginScreen();

  return (
    <View style={styles.container}>
      <Logo width={200} height={120} style={styles.reactLogo} />
      <Text style={styles.description}>{t("loginText")}</Text>

      <View style={styles.input}>
        <Input
          placeholder={t("enterEmail")}
          value={email}
          onChangeText={setEmail}
          isError={error === t("invalidEmail")}
        />
      </View>

      <View style={styles.input}>
        <Input
          placeholder={t("enterPassword")}
          value={password}
          onChangeText={setPassword}
          isPassword
          isError={error === t("invalidPassword")}
        />
      </View>

      {error !== "" && (
        <View style={styles.error}>
          {/* "invalidPassword" */}
          <Text style={styles.textError}>{t(error)}</Text>
          <Link to="help">{t("forgotPassword")}</Link>
        </View>
      )}

      <Text style={styles.textSeparation}>{t("or")}</Text>

      <Button
        title={t("registerGoogle")}
        filled={false}
        style={styles.button}
        leftContent={<Google />}
        onPress={() => {}}
      />
      <Button
        title={t("login")}
        filled={true}
        style={styles.button}
        onPress={handleLogin}
        disabled={!isDisabledLogin}
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
    fontFamily: "Inter_400Regular",
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
    fontFamily: "Inter_400Regular",
  },
  error: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Inter_400Regular",
  },
  textError: {
    color: Colors.RedColor,
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 12,
    fontFamily: "Inter_400Regular",
  },
});
