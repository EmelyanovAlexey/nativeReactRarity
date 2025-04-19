import { useState } from "react";
import { useUnit } from "effector-react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function useChangePasswordScreen() {
  const { t } = useTranslation();
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const navigation = useNavigation();
  const isDisabledConfirmPassword = password !== "";

  // Отправка запроса потверждения паролья
  const handleConfirmPassword = async () => {
    // try {
    //   await register({ email, password });
    //   navigation.navigate("Home");
    // } catch (err: any) {
    //   Alert.alert("Ошибка", err.message);
    // }
    setStep(1);
    setPassword("");
  };

  // Отправка нового пароля
  const handleCreateNewPassword = async () => {
    // try {
    //   await register({ email, password });
    //   navigation.navigate("Home");
    // } catch (err: any) {
    //   Alert.alert("Ошибка", err.message);
    // }
    if (validateInputs()) {
      setStep(2);
      setPassword("");
      setPasswordRepeat("");
    }
  };

  // Вернуться обратно
  const handleReturn = async () => {
    setStep(2);
    setPassword("");
    setPasswordRepeat("");
    navigation.goBack();
  };

  const validateInputs = () => {
    if (password.length < 6) {
      setError(t("shortPassword"));
      return false;
    }
    if (password !== passwordRepeat) {
      setError(t("passwordsDontMatch"));
      return false;
    } else {
      setError("");
      return true;
    }
  };

  return {
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
  };
}
