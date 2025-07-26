import { View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { jwtDecode } from "jwt-decode";
import { setUserEvent } from "@/models/auth/events/events";

import Button from "@/components/Button";

import Logo from "@/assets/images/logo.svg";
import Link from "@/components/Link";
import Spinner from "@/components/Spinner";

import { Colors } from "../shared/constStyle";
import { useEffect, useState } from "react";

export default function FirstScreen({ navigation }: any) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      try {
        if (isJwtToken(token)) {
          const decoded = jwtDecode(token);
          // Если токен истёк — не логиним
          const now = Date.now() / 1000;
          if (decoded.exp && decoded.exp < now) {
            console.log("Token expired");
            await AsyncStorage.removeItem("token");
            return;
          }
          setUserEvent({
            email: decoded?.email || "",
            name: decoded?.name || "",
          });
          navigation.reset({
            index: 0,
            routes: [{ name: "main" }],
          });
        } else {
          const userData = await fetchYandexUserData(token);
          if (!userData) {
            await AsyncStorage.removeItem("token");
            return;
          }
          setUserEvent({
            email: userData.email,
            name: userData.name,
          });
          navigation.reset({
            index: 0,
            routes: [{ name: "main" }],
          });
        }
      } catch (e) {
        console.log("Ошибка декодирования токена:", e);
      }
    };

    checkToken().finally(() => {
      setIsLoading(false);
    });
  }, []);

  // для проверки, является ли токен JWT
  const isJwtToken = (token: string) => {
    return token.split(".").length === 3;
  };

  // для получения данных пользователя из Яндекс OAuth
  const fetchYandexUserData = async (token: string) => {
    try {
      const response = await fetch("https://login.yandex.ru/info?format=json", {
        headers: { Authorization: `OAuth ${token}` },
      });
      const data = await response.json();
      return {
        email: data.default_email || "",
        name: data.real_name || "",
      };
    } catch (error) {
      console.error("Ошибка получения данных от Яндекс:", error);
      return null;
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Logo width={200} height={120} style={styles.reactLogo} />
        <Spinner />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Logo width={200} height={120} style={styles.reactLogo} />
      <Text style={styles.description}>{t("startLogin")}</Text>

      <Link to="changeLanguage" style={{ marginBottom: 20, marginTop: 10 }}>
        <Text style={[styles.link]}>{t("changeLanguage")}</Text>
      </Link>

      <Button
        title={t("register")}
        filled={true}
        style={styles.button}
        onPress={() => navigation.navigate("register")}
      />
      <Button
        title={t("login")}
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
  button: {
    width: "100%",
  },
  link: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors.Primary,
    textDecorationLine: "underline",
  },
});
