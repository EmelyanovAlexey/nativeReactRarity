import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { useUnit } from "effector-react";
import { loginFx } from "../models/auth";

import Button from "@/components/Button";
import Logo from "@/assets/images/logo.svg";

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

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Пароль"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Зарегистрироваться"
        filled={true}
        style={styles.button}
        onPress={() => navigation.navigate("register")}
      />
      <Button
        title="Войти"
        filled={false}
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
    backgroundColor: "#FFF",
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
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    width: "100%",
  },
});
