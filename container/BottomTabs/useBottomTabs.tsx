import { useUnit } from "effector-react";

import { ActiveTab } from "@/models/main/types";
import { setActiveTabEvent } from "@/models/main/events/events";
import { $mainModel } from "@/models/main";

import HomeScreen from "@/screens/HomeScreen";
import SearchScreen from "@/screens/SearchScreen";
import ProfileScreen from "@/screens/ProfileScreen";

export default function useBottomTabs() {
  const { activeTab } = useUnit($mainModel);

  const handleSetActiveTab = (tab: ActiveTab) => {
    setActiveTabEvent(tab);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case ActiveTab.home:
        return <HomeScreen />;
      case ActiveTab.search:
        return <SearchScreen />;
      case ActiveTab.profile:
        return <ProfileScreen />;
      default:
        "Ошибка !";
    }
  };

  return {
    activeTab,
    handleSetActiveTab,
    renderScreen,
  };
}
