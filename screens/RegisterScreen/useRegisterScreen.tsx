import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  setErrorEvent,
  setTokenEvent,
  setUserEvent,
} from "@/models/auth/events/events";
import { registerFx } from "@/models/auth/effects/effects";
import { $userModel } from "@/models/auth";
import { useUnit } from "effector-react";
import { useYandexLogin } from "@/hooks/useYandexAuth";
import * as WebBrowser from "expo-web-browser";

// чтобы корректно закрывался браузер после логина
WebBrowser.maybeCompleteAuthSession(); // Обязательно вызвать для корректной работы в Expo

export default function useRegisterScreen({ navigation }: any) {
  const { t } = useTranslation();

  const { error } = useUnit($userModel);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isDisabledRegister =
    email !== "" && password !== "" && repeatPassword !== "";

  // -----------------------
  const { promptAsync } = useYandexLogin(async (token: string) => {
    try {
      const res = await fetch("https://login.yandex.ru/info?format=json", {
        headers: {
          Authorization: `OAuth ${token}`,
        },
      });

      const userInfo = await res.json();
      // console.log("Yandex info:", userInfo);

      await AsyncStorage.setItem("token", token);
      setTokenEvent(token);
      setUserEvent({
        email: userInfo.emails[0] || "",
        name: userInfo.real_name || "",
      });
      setIsAuthenticated(true);
    } catch (err) {
      setErrorEvent("yandexLoginFailed");
    }
  });

  const handleYandex = async () => {
    await promptAsync();
  };

  // -----------------------

  const handleRegister = () => {
    if (validateInputs()) {
      registerFx({
        email: email,
        password: password,
      }).then(() => {
        navigation.navigate("finishRegister");
      });
    }
  };

  const validateInputs = () => {
    if (!emailRegex.test(email)) {
      setErrorEvent("invalidEmail");
      return false;
    } else if (password.length < 6) {
      setErrorEvent("shortPassword");
      return false;
    } else if (password !== repeatPassword) {
      setErrorEvent("passwordsDontMatch");
      return false;
    } else {
      setErrorEvent("");
      return true;
    }
  };

  useEffect(() => {
    return () => {
      setErrorEvent("");
    };
  }, []);

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
    repeatPassword,
    isDisabledRegister,
    setEmail,
    setPassword,
    setRepeatPassword,
    handleRegister,
    handleYandex,
  };
}
