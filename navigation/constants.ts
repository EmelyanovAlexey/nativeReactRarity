import FirstScreen from "@/screens/FirstScreen";
import LoginScreen from "@/screens/LoginScreen";
import RegisterScreen from "@/screens/RegisterScreen";
import FinishRegisterScreen from "@/screens/FinishRegisterScreen";
import HelpScreen from "@/screens/HelpScreen";
import learnMaterialScreen from "@/screens/LearnMaterialScreen";
import SearchScreen from "@/screens/SearchScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import ChangePasswordScreen from "@/screens/ChangePasswordScreen";
import ChangeLanguageScreen from "@/screens/ChangeLanguageScreen";
import FavouritesScreen from "@/screens/FavouritesScreen";
import HistorySearchScreen from "@/screens/HistorySearchScreen";
import TermsOfUseScreen from "@/screens/TermsOfUseScreen";
import PrivacyPolicyScreen from "@/screens/PrivacyPolicyScreen";

import BottomTabs from "@/container/BottomTabs";

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
    title: "changePasswordTitle",
    component: ChangePasswordScreen,
    type: RouteType.showArrow,
  },
  {
    name: "changeLanguage",
    title: "changeLanguage",
    component: ChangeLanguageScreen,
    type: RouteType.showArrow,
  },
  {
    name: "favourites",
    title: "favourites",
    component: FavouritesScreen,
    type: RouteType.showArrow,
  },
  {
    name: "historySearch",
    title: "history",
    component: HistorySearchScreen,
    type: RouteType.showArrow,
  },
  {
    name: "learnMaterials",
    title: "trainingMaterials",
    component: learnMaterialScreen,
    type: RouteType.showArrow,
  },
  {
    name: "termsOfUse",
    title: "termsOfUse",
    component: TermsOfUseScreen,
    type: RouteType.showArrow,
  },
  {
    name: "privacyPolicy",
    title: "privacyPolicy",
    component: PrivacyPolicyScreen,
    type: RouteType.showArrow,
  },
];
