import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import { setErrorEvent } from "@/models/auth/events/events";
import { loginFx } from "@/models/auth/effects/effects";
import { $userModel } from "@/models/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

// чтобы корректно закрывался браузер после логина
WebBrowser.maybeCompleteAuthSession(); // Обязательно вызвать для корректной работы в Expo

export default function useLoginScreen() {
  const { t } = useTranslation();

  const { error } = useUnit($userModel);
  const [email, setEmail] = useState("emelyanov_98@mail.ru");
  const [password, setPassword] = useState("Ae97980525");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isDisabledLogin = email !== "" && password !== "";

  // -----------------------
  // Подключаем Google Auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "300313252073-66vhmr7567gt5q2gkq6gc9al337bi5dc.apps.googleusercontent.com",
    iosClientId:
      "300313252073-rj3vequ0vfcdlchijom7m9ef8gab9het.apps.googleusercontent.com",
    webClientId:
      "300313252073-bciuv13oft99m9hph6j5anr5ur07s8tl.apps.googleusercontent.com",
  });

  const handleGoogle = async () => {
    promptAsync();
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Access Token:", authentication?.accessToken);
      setIsAuthenticated(true);
    }
  }, [response]);

  // -----------------------

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
