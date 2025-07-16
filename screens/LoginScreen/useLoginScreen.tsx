import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import {
  setErrorEvent,
  setTokenEvent,
  setUserEvent,
} from "@/models/auth/events/events";
import { loginFx } from "@/models/auth/effects/effects";

import { $userModel } from "@/models/auth";
import * as WebBrowser from "expo-web-browser";
import { useYandexLogin } from "@/hooks/useYandexAuth";

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

  const { promptAsync } = useYandexLogin(async (token: string) => {
    try {
      const res = await fetch("https://login.yandex.ru/info?format=json", {
        headers: {
          Authorization: `OAuth ${token}`,
        },
      });

      const userInfo = await res.json();
      console.log("Yandex info:", userInfo);

      setUserEvent({
        email: userInfo.emails[0] || "",
        name: userInfo.real_name || "",
      });

      await AsyncStorage.setItem("token", token);
      setTokenEvent(token);
      setIsAuthenticated(true);
    } catch (err) {
      setErrorEvent("yandexLoginFailed");
    }
  });

  const handleYandex = async () => {
    await promptAsync();
  };

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
    handleYandex,
  };
}
