import { useState } from "react";
import { useUnit } from "effector-react";
import { loginFx } from "../../models/auth";
import { useTranslation } from "react-i18next";

export default function useSearchScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return {
    email,
  };
}
