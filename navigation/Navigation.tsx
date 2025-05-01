import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

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
    type: RouteType,
    title: string = ""
  ) {
    if (type === RouteType.hideHeader) {
      return { ...hideHeader, title: t(title) };
    }
    if (type === RouteType.showArrowHelp) {
      return { ...arrowHelp(navigation), title: t(title) };
    }

    return { ...arrow, title: t(title) };
  }

  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerBackTitleVisible: false, // убрать текст рядом со стрелкой
        headerStyle: {
          backgroundColor: Colors.WhiteColor, // фон хедера
          elevation: 0, // Android
          shadowOpacity: 0, // iOS
          borderBottomWidth: 0, // Web
        },
        headerLeftContainerStyle: {
          paddingLeft: 8,
        },
        headerTitleStyle: {
          fontWeight: "bold", // стиль заголовка
        },
      }}
    >
      {Route.map((RouteItem) => (
        <Stack.Screen
          key={RouteItem.name}
          name={RouteItem.name}
          component={RouteItem.component}
          options={({
            navigation,
          }: {
            navigation: NativeStackNavigationProp<RootStackParamList>;
          }) => getContentHeader(navigation, RouteItem.type, RouteItem.title)}
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
