import FirstScreen from "@/screens/FirstScreen";
import LoginScreen from "@/screens/LoginScreen";
import RegisterScreen from "@/screens/RegisterScreen";
import FinishRegisterScreen from "@/screens/FinishRegisterScreen";
import HelpScreen from "@/screens/HelpScreen";
import HomeScreen from "@/screens/HomeScreen";
import SearchScreen from "@/screens/SearchScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import ChangePasswordScreen from "@/screens/ChangePasswordScreen";

import BottomTabs from "@/components/BottomTabs";

export enum RouteType {
  showArrow,
  hideHeader,
  showArrowHelp,
}

export const Route = [
  {
    name: "first",
    component: FirstScreen,
    type: RouteType.hideHeader,
  },
  {
    name: "login",
    component: LoginScreen,
    type: RouteType.showArrowHelp,
  },
  {
    name: "register",
    component: RegisterScreen,
    type: RouteType.showArrowHelp,
  },
  {
    name: "finishRegister",
    component: FinishRegisterScreen,
    type: RouteType.showArrowHelp,
  },
  {
    name: "help",
    component: HelpScreen,
    type: RouteType.showArrow,
  },
  {
    name: "home",
    component: HomeScreen,
    type: RouteType.hideHeader,
  },
  {
    name: "search",
    component: SearchScreen,
    type: RouteType.hideHeader,
  },
  {
    name: "profile",
    component: ProfileScreen,
    type: RouteType.hideHeader,
  },
  {
    name: "main",
    component: BottomTabs,
    type: RouteType.hideHeader,
  },
  {
    name: "changePassword",
    title: "Смена пароля",
    component: ChangePasswordScreen,
    type: RouteType.showArrow,
  },
];
