import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { setErrorEvent } from "@/models/auth/events/events";
import { registerFx } from "@/models/auth/effects/effects";
import { $userModel } from "@/models/auth";
import { useUnit } from "effector-react";
import * as Google from "expo-auth-session/providers/google";
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
  // Подключаем Google Auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    // expoClientId: "<ТВОЙ_EXPO_CLIENT_ID>",
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
    handleGoogle,
  };
}
