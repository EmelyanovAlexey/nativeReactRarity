import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Arrow from "@/components/Icons/Arrow";
import { Colors } from "@/shared/constStyle";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();

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

    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Help")}
        style={{ marginRight: 16 }}
      >
        <Text style={styles.help}>Помощь</Text>
      </TouchableOpacity>
    ),
  };

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
      <Stack.Screen name="login" component={LoginScreen} options={arrow} />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={arrow}
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
  help: {
    color: Colors.Primary,
    fontSize: 14,
    fontWeight: 600,
  },
});

export default Navigation;
