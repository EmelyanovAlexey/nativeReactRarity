import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import { setErrorEvent } from "@/models/auth/events/events";
import { loginFx, loginGoogleFx } from "@/models/auth/effects/effects";
import { $userModel } from "@/models/auth";

export default function useLoginScreen() {
  const { t } = useTranslation();

  const { error } = useUnit($userModel);
  const [email, setEmail] = useState("emelyanov_98@mail.ru");
  const [password, setPassword] = useState("Ae97980525");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isDisabledLogin = email !== "" && password !== "";

  const handleLogin = async () => {
    if (validateInputs()) {
      loginFx({ email, password }).then(() => {
        setIsAuthenticated(true);
      });
    }
  };

  const validateInputs = () => {
    if (!emailRegex.test(email)) {
      setErrorEvent("invalidEmail");
      return false;
    } else if (password.length < 1) {
      setErrorEvent("shortPassword");
      return false;
    } else {
      setErrorEvent("");
      return true;
    }
  };

  const handleGoogle = () => {
    loginGoogleFx();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("main");
    }

    return () => {
      setErrorEvent("");
    };
  }, [isAuthenticated, navigation]);

  return {
    email,
    password,
    error: t(error),
    isDisabledLogin,
    setEmail,
    setPassword,
    handleLogin,
    handleGoogle,
  };
}
