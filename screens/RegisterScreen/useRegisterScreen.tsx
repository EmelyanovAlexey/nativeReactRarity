import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { setErrorEvent } from "@/models/auth/events/events";
import { registerFx } from "@/models/auth/effects/effects";
import { $userModel } from "@/models/auth";
import { useUnit } from "effector-react";

export default function useRegisterScreen({ navigation }: any) {
  const { t } = useTranslation();

  const { error } = useUnit($userModel);
  const [email, setEmail] = useState("1@mail.ru");
  const [password, setPassword] = useState("111111");
  const [repeatPassword, setRepeatPassword] = useState("111111");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isDisabledRegister =
    email !== "" && password !== "" && repeatPassword !== "";

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
  };
}
