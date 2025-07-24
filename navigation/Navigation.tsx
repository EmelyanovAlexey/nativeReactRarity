import React from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
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

  // Функция для arrow header с явной передачей navigation
  const getArrowHeader = (
    navigation: NativeStackNavigationProp<RootStackParamList>
  ): NativeStackNavigationOptions => ({
    title: "",
    headerShown: true,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingHorizontal: 10 }}
      >
        <View style={styles.arrow}>
          <Arrow />
        </View>
      </TouchableOpacity>
    ),
  });

  // Функция для arrowHelp header
  const getArrowHelpHeader = (
    navigation: NativeStackNavigationProp<RootStackParamList>
  ): NativeStackNavigationOptions => ({
    ...getArrowHeader(navigation),
    headerRight: () => (
      <Link to="help" style={{ marginRight: 16 }}>
        <Text style={{ fontSize: 14 }}>{t("help")}</Text>
      </Link>
    ),
  });

  const hideHeader: NativeStackNavigationOptions = {
    title: "",
    headerShown: false,
  };

  function getContentHeader(
    navigation: NativeStackNavigationProp<RootStackParamList>,
    type: RouteType,
    title: string = ""
  ): NativeStackNavigationOptions {
    const baseOptions = {
      title: t(title),
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: Colors.WhiteColor,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerLeftContainerStyle: {
        paddingLeft: 8,
      },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    };

    switch (type) {
      case RouteType.hideHeader:
        return { ...hideHeader };
      case RouteType.showArrowHelp:
        return { ...baseOptions, ...getArrowHelpHeader(navigation) };
      default:
        return { ...baseOptions, ...getArrowHeader(navigation) };
    }
  }

  return (
    <Stack.Navigator
      initialRouteName="first"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: Colors.WhiteColor,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerLeftContainerStyle: {
          paddingLeft: 8,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {Route.map((RouteItem) => (
        <Stack.Screen
          key={RouteItem.name}
          name={RouteItem.name}
          component={RouteItem.component}
          options={({ navigation }) =>
            getContentHeader(navigation, RouteItem.type, RouteItem.title)
          }
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
    borderRadius: 16,
    backgroundColor: Colors.GrayColor2,
  },
});

export default Navigation;
