import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";
import useRegisterScreen from "./useRegisterScreen";

import Button from "@/components/Button";
import Input from "@/components/Input";
import HeaderPage from "@/components/HeaderPage";
import { HeaderType } from "@/components/HeaderPage";
import Logo from "@/assets/images/logo.svg";
import Yandex from "@/components/Icons/Yandex";

export default function RegisterScreen({ navigation }: any) {
  const { t } = useTranslation();
  const {
    email,
    password,
    repeatPassword,
    error,
    isDisabledRegister,
    setEmail,
    setPassword,
    setRepeatPassword,
    handleRegister,
    handleYandex,
  } = useRegisterScreen({ navigation });

  return (
    <View style={styles.container}>
      <HeaderPage style={styles.header} type={HeaderType.showArrowHelp} />
      <Logo width={200} height={120} style={styles.reactLogo} />
      <Text style={styles.description}>{t("registerText")}</Text>

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
          placeholder={t("comeUpPassword")}
          value={password}
          onChangeText={setPassword}
          isPassword
          isError={error === t("shortPassword")}
        />
      </View>

      <View style={styles.input}>
        <Input
          placeholder={t("enterPasswordRepeat")}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          isPassword
          isError={error === t("passwordsDontMatch")}
        />
      </View>

      {error !== "" && (
        <View style={styles.error}>
          <Text style={styles.textError}>{error}</Text>
        </View>
      )}

      <Text style={styles.textSeparation}>{t("or")}</Text>

      <Button
        title={t("registerYandex")}
        filled={false}
        style={styles.button}
        leftContent={<Yandex />}
        onPress={handleYandex}
      />
      <Button
        title={t("register")}
        filled={true}
        style={styles.button}
        onPress={handleRegister}
        disabled={!isDisabledRegister}
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
