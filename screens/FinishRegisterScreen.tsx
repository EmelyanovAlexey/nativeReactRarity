import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import { useUnit } from "effector-react";
import { registerFx } from "../models/auth";
import { Colors } from "../shared/constStyle";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";
import Input from "@/components/Input";

import Logo from "@/assets/images/logo.svg";
import Google from "@/components/Icons/Google";

export default function FinishRegisterScreen({ navigation }: any) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{t("registerText")}</Text>
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
  description: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 24,
    lineHeight: 20,
    letterSpacing: 0,
  },
});
