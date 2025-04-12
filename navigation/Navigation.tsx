import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HelpScreen from "../screens/HelpScreen";

import Link from "@/components/Link";
import Arrow from "@/components/Icons/Arrow";
import { Colors } from "@/shared/constStyle";
import { RootStackParamList } from "./types";
import { Route, RouteType } from "./constants";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { t } = useTranslation();

  const arrow = {
    title: "",
    headerShown: true,
    headerLeft: ({ onPress }: { onPress?: () => void }) => (
      <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 10 }}>
        <View style={styles.arrow}>
          <Arrow />
        </View>
      </TouchableOpacity>
    ),
  };

  const arrowHelp = (
    navigation: NativeStackNavigationProp<RootStackParamList>
  ) => ({
    ...arrow,
    headerRight: () => (
      <Link to="help" style={{ marginRight: 16 }} textStyle={{ fontSize: 14 }}>
        {t("help")}
      </Link>
    ),
  });

  const hideHeader = { title: "", headerShown: false };

  function getContentHeader(
    navigation: NativeStackNavigationProp<RootStackParamList>,
    type: RouteType
  ) {
    if (type === RouteType.hideHeader) {
      return hideHeader;
    }
    if (type === RouteType.showArrowHelp) {
      return arrowHelp(navigation);
    }

    return arrow;
  }

  return (
    <Stack.Navigator
      initialRouteName="first"
      screenOptions={{
        headerBackTitleVisible: false, // убрать текст рядом со стрелкой
        headerTintColor: Colors.WhiteColor, // цвет стрелки
        headerStyle: {
          backgroundColor: Colors.WhiteColor, // фон хедера
        },
        headerTitleStyle: {
          fontWeight: "bold", // стиль заголовка
        },
      }}
    >
      {Route.map((RouteItem) => (
        <Stack.Screen
          name={RouteItem.name}
          component={RouteItem.component}
          options={({
            navigation,
          }: {
            navigation: NativeStackNavigationProp<RootStackParamList>;
          }) => getContentHeader(navigation, RouteItem.type)}
        />
      ))}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  arrow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 34,
    height: 32,
    borderRadius: "50%",
    backgroundColor: Colors.GrayColor2,
  },
  help: {
    marginRight: 16,
    fontSize: 14,
  },
});

export default Navigation;
