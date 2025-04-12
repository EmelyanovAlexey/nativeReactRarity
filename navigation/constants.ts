import FirstScreen from "../screens/FirstScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import FinishRegisterScreen from "../screens/FinishRegisterScreen/FinishRegisterScreen";
import HelpScreen from "../screens/HelpScreen";
import HomeScreen from "../screens/HomeScreen";

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
];
