import { useState } from "react";
import { useUnit } from "effector-react";
import { loginFx } from "../../models/auth";
import { useTranslation } from "react-i18next";

export default function useHomeScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isDisabledLogin = email !== "" && password !== "";

  const login = useUnit(loginFx);

  const handleLogin = async () => {
    // try {
    //   await register({ email, password });
    //   navigation.navigate("Home");
    // } catch (err: any) {
    //   Alert.alert("Ошибка", err.message);
    // }
    if (validateInputs()) {
      navigation.navigate("home");
    }
  };

  const validateInputs = () => {
    if (!emailRegex.test(email)) {
      setError(t("invalidEmail"));
      return false;
    } else if (password.length < 1) {
      setError(t("shortPassword"));
      return false;
    } else {
      setError("");
      return true;
    }
  };

  return {
    email,
    password,
    error,
    isDisabledLogin,
    setEmail,
    setPassword,
    handleLogin,
  };
}
