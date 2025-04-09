import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { useUnit } from "effector-react";
import { loginFx } from "../models/auth";
import { Colors } from "../shared/constStyle";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/assets/images/logo.svg";
import Google from "@/components/Icons/Google";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useUnit(loginFx);

  const handleLogin = async () => {
    try {
      await login({ email, password });
      navigation.navigate("Home");
    } catch (err: any) {
      Alert.alert("Ошибка", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Logo width={200} height={120} style={styles.reactLogo} />
      <Text style={styles.description}>
        Чтобы войти, введите свой адрес электронной почты и пароль
      </Text>

      <View style={styles.input}>
        <Input
          placeholder="Введите свой адрес электронной почты"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.input}>
        <Input
          placeholder="Придумайте пароль"
          value={email}
          onChangeText={setEmail}
          isPassword
          isError
        />
      </View>

      <Text style={styles.textSeparation}>ИЛИ</Text>

      <Button
        title="Регистрация через Google"
        filled={false}
        style={styles.button}
        leftContent={<Google />}
        onPress={() => navigation.navigate("register")}
      />
      <Button
        title="Войти"
        filled={true}
        style={styles.button}
        onPress={() => navigation.navigate("login")}
        disabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.BgcColor,
  },
  reactLogo: {
    justifyContent: "center",
    marginBottom: 24,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
  },
  input: {
    marginBottom: 12,
    width: "100%",
  },
  button: {
    width: "100%",
  },
  textSeparation: {
    fontSize: 18,
    color: Colors.GrayColor,
    fontWeight: 600,
    marginBottom: 24,
    marginTop: 12,
  },
});
