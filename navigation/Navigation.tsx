import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="first">
      <Stack.Screen
        name="first"
        component={FirstScreen}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Вход", headerShown: true }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ title: "Регистрация", headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
