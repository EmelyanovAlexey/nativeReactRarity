import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { useUnit } from "effector-react";
import { registerFx } from "../models/auth";

import Button from "@/components/Button";
import Logo from "@/assets/images/logo.svg";

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = useUnit(registerFx);

  const handleRegister = async () => {
    try {
      await register({ email, password });
      navigation.navigate("Home");
    } catch (err: any) {
      Alert.alert("Ошибка", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Logo width={200} height={120} style={styles.reactLogo} />
      <Text style={styles.description}>
        Чтобы зарегистрироваться, введите свой адрес электронной почты и
        создайте пароль
      </Text>

      <TextInput
        placeholder="Введите свой адрес электронной почты"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Придумайте пароль"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Подтвердите пароль"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.textSeparation}>ИЛИ</Text>

      <Button
        title="Регистрация через Google"
        filled={true}
        style={styles.button}
        icon={require("@/assets/images/google.svg")}
        onPress={() => navigation.navigate("register")}
      />
      <Button
        title="Зарегистрироваться"
        filled={false}
        style={styles.button}
        onPress={() => navigation.navigate("login")}
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
  textSeparation: {
    fontSize: 18,
    color: "#989B9E",
    fontWeight: 600,
    marginBottom: 24,
    marginTop: 12,
  },
});
