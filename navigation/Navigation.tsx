import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Arrow from "@/components/Icons/Arrow";
import { Colors } from "@/shared/constStyle";

const Stack = createNativeStackNavigator();

const Navigation = () => {
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
      <Stack.Screen
        name="first"
        component={FirstScreen}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "",
          headerShown: true,
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
              onPress={onPress}
              style={{ paddingHorizontal: 10 }}
            >
              <View style={styles.arrow}>
                <Arrow />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          title: "",
          headerShown: true,
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
              onPress={onPress}
              style={{ paddingHorizontal: 10 }}
            >
              <View style={styles.arrow}>
                <Arrow />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
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
});

export default Navigation;
