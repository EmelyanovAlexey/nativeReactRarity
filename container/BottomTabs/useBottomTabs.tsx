import { useUnit } from "effector-react";

import { ActiveTab } from "@/models/main/types";
import { setActiveTabEvent } from "@/models/main/events/events";
import { $mainModel } from "@/models/main";

import SearchScreen from "@/screens/SearchScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import FavouritesScreen from "@/screens/FavouritesScreen";
import HomeScreen from "@/screens/HomeScreen";

export default function useBottomTabs() {
  const { activeTab } = useUnit($mainModel);

  const handleSetActiveTab = (tab: ActiveTab) => {
    setActiveTabEvent(tab);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case ActiveTab.favorite:
        return <FavouritesScreen />;
      case ActiveTab.search:
        return <SearchScreen />;
      case ActiveTab.profile:
        return <ProfileScreen />;
      case ActiveTab.home:
        return <HomeScreen />;
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
