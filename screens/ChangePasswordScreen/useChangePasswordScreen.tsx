import { useState } from "react";
import { useUnit } from "effector-react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { loginFx, setPasswordFx } from "@/models/auth/effects/effects";
import { $userModel } from "@/models/auth";

export default function useChangePasswordScreen() {
  const { t } = useTranslation();
  const [curPassword, setCurPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const navigation = useNavigation();
  const { email } = useUnit($userModel);

  const isDisabledConfirmPassword = password !== "";

  // Отправка запроса потверждения паролья
  const handleConfirmPassword = async () => {
    loginFx({ email, password })
      .then(() => {
        setCurPassword(password);
        setError("");
        setStep(1);
        setPassword("");
      })
      .catch((err) => {
        setError(t("invalidPassword"));
        setCurPassword("");
      });
  };

  // Отправка нового пароля
  const handleCreateNewPassword = async () => {
    if (validateInputs()) {
      setPasswordFx({
        currentPassword: curPassword,
        newPassword: password,
      }).then(() => {
        setStep(2);
        setPassword("");
        setPasswordRepeat("");
      });
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
