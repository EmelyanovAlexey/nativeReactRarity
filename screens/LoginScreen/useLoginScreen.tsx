import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { loginFx } from "../../models/auth";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

export default function useLoginScreen() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("1@mai.ru");
  const [password, setPassword] = useState("111111");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

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
      setIsAuthenticated(true);
    }
  };

  const validateInputs = () => {
    if (!emailRegex.test(email)) {
      setError(() => t("invalidEmail"));
      return false;
    } else if (password.length < 1) {
      setError(() => t("shortPassword"));
      return false;
    } else {
      setError("");
      return true;
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("main");
    }
  }, [isAuthenticated, navigation]);

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
