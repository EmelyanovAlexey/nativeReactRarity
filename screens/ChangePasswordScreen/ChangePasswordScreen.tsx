import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../shared/constStyle";
import { useTranslation } from "react-i18next";
import useChangePasswordScreen from "./useChangePasswordScreen";

import Button from "@/components/Button";
import Input from "@/components/Input";
import HeaderPage from "@/components/HeaderPage";
import { HeaderType } from "@/components/HeaderPage";
import CheckMarkAround from "@/components/Icons/CheckMarkAround";

export default function ChangePasswordScreen() {
  const { t } = useTranslation();
  const {
    password,
    passwordRepeat,
    error,
    isDisabledConfirmPassword,
    step,
    setPassword,
    setPasswordRepeat,
    handleConfirmPassword,
    handleCreateNewPassword,
    handleReturn,
  } = useChangePasswordScreen();

  const contentPage = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Text style={styles.description}>
              {t("changePasswordEnterOldPasswordText")}
            </Text>

            <View style={styles.input}>
              <Input
                placeholder={t("enterPassword")}
                value={password}
                onChangeText={setPassword}
                isPassword
                isError={error === t("invalidPassword")}
              />
            </View>

            {error && (
              <View style={styles.error}>
                <Text style={styles.textError}>{error}</Text>
              </View>
            )}

            <Button
              title={t("next")}
              filled={true}
              style={styles.button}
              onPress={handleConfirmPassword}
              disabled={!isDisabledConfirmPassword}
            />
          </>
        );

      case 1:
        return (
          <>
            <Text style={styles.description}>
              {t("changePasswordEnterNewPasswordText")}
            </Text>

            <View style={styles.input}>
              <Input
                placeholder={t("enterNewPassword")}
                value={password}
                onChangeText={setPassword}
                isPassword
                isError={error === t("shortPassword")}
              />
            </View>

            <View style={styles.input}>
              <Input
                placeholder={t("enterNewRepeatPassword")}
                value={passwordRepeat}
                onChangeText={setPasswordRepeat}
                isPassword
                isError={error === t("passwordsDontMatch")}
              />
            </View>

            {error && (
              <View style={styles.error}>
                <Text style={styles.textError}>{error}</Text>
              </View>
            )}

            <Button
              title={t("btnChangePassword")}
              filled={true}
              style={styles.button}
              onPress={handleCreateNewPassword}
              disabled={!isDisabledConfirmPassword}
            />
          </>
        );

      case 2:
        return (
          <>
            <View style={styles.icon}>
              <CheckMarkAround />
            </View>
            <Text style={styles.title}>
              {t("changePasswordEnterSuccessPasswordTitle")}
            </Text>
            <Text style={[styles.description, styles.mbAll]}>
              {t("changePasswordEnterSuccessPasswordText")}
            </Text>

            {error && (
              <View style={styles.error}>
                <Text style={styles.textError}>{error}</Text>
              </View>
            )}

            <Button
              title={t("backProfile")}
              filled={true}
              style={styles.button}
              onPress={handleReturn}
            />
          </>
        );

      default:
        <>Ошибка!</>;
    }
  };

  return (
    <View style={styles.container}>
      {" "}
      <HeaderPage style={styles.header} type={HeaderType.showArrowHelp} />
      {contentPage()}
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
  icon: {
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 12,
    lineHeight: 20,
    letterSpacing: 0,
    fontFamily: "Inter_400Regular",
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
  mbAll: {
    marginBottom: "130%",
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
