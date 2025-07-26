import React from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import Link from "@/components/Link";
import Arrow from "@/components/Icons/Arrow";
import { Colors } from "@/shared/constStyle";
import { RootStackParamList } from "./types";
import { Route, RouteType, IRoute } from "./constants";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { t } = useTranslation();

  // // Универсальная кнопка "назад"
  // const BackButton = ({
  //   navigation,
  // }: {
  //   navigation: NativeStackNavigationProp<RootStackParamList>;
  // }) => (
  //   <TouchableOpacity
  //     onPress={() => {
  //       if (navigation.canGoBack()) {
  //         navigation.goBack();
  //       } else {
  //         navigation.navigate("profile");
  //       }
  //     }}
  //     style={{ paddingHorizontal: 10 }}
  //     testID="back-button"
  //   >
  //     <View style={styles.arrow}>
  //       <Arrow />
  //     </View>
  //   </TouchableOpacity>
  // );

  // // Замените BackButton на:
  // const BackButton = () => {
  //   const navigation =
  //     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //   return (
  //     <TouchableOpacity
  //       onPress={() => {
  //         if (navigation.canGoBack()) {
  //           navigation.goBack();
  //         } else {
  //           navigation.navigate("profile");
  //         }
  //       }}
  //       style={{ paddingHorizontal: 10 }}
  //     >
  //       <View style={styles.arrow}>
  //         <Arrow />
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  // Базовые опции для всех экранов
  const baseScreenOptions: NativeStackNavigationOptions = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: Colors.WhiteColor,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };

  // Опции для экранов с кнопкой "назад" и help
  const getScreenOptions = (
    type: RouteType,
    title: string = ""
  ): NativeStackNavigationOptions => {
    const commonOptions = {
      ...baseScreenOptions,
      title: t(title),
    };

    return {
      ...commonOptions,
      headerShown: false,
    };

    // switch (type) {
    //   case RouteType.hideHeader:
    //     return {
    //       ...commonOptions,
    //       headerShown: false,
    //     };

    //   case RouteType.showArrowHelp:
    //     return {
    //       ...commonOptions,
    //       headerShown: true,
    //       headerLeft: () => <BackButton />,
    //       headerRight: () => (
    //         <Link to="help" style={{ marginRight: 16 }}>
    //           <Text style={{ fontSize: 14 }}>{t("help")}</Text>
    //         </Link>
    //       ),
    //     };

    //   default:
    //     return {
    //       ...commonOptions,
    //       headerShown: true,
    //       headerLeft: () => <BackButton />,
    //     };
    // }
  };

  return (
    <Stack.Navigator initialRouteName="first" screenOptions={baseScreenOptions}>
      {Route.map((RouteItem: IRoute) => (
        <Stack.Screen
          key={RouteItem.name}
          name={RouteItem.name}
          component={RouteItem.component}
          options={() => getScreenOptions(RouteItem.type, RouteItem.title)}
        />
      ))}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  arrow: {
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10,
    // width: 34,
    // height: 32,
    borderRadius: 16,
    backgroundColor: Colors.GrayColor2,
  },
});

export default Navigation;
