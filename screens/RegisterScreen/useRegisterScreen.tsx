import { useState } from "react";
import { registerFx } from "../../models/auth/effects/effects";
import { useTranslation } from "react-i18next";

export default function useRegisterScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isDisabledRegister =
    email !== "" && password !== "" && repeatPassword !== "";

  const handleRegister = () => {
    if (validateInputs()) {
      registerFx({
        email: email,
        password: password,
      });
      navigation.navigate("finishRegister");
    }
  };

  const validateInputs = () => {
    if (!emailRegex.test(email)) {
      setError(t("invalidEmail"));
      return false;
    } else if (password.length < 6) {
      setError(t("shortPassword"));
      return false;
    } else if (password !== repeatPassword) {
      setError(t("passwordsDontMatch"));
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
    repeatPassword,
    isDisabledRegister,
    setEmail,
    setPassword,
    setRepeatPassword,
    handleRegister,
  };
}
