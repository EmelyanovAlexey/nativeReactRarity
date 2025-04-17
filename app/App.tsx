import React from "react";
import { I18nextProvider } from "react-i18next";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Navigation from "../navigation/Navigation";
import i18n from "../locales/i18n";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <I18nextProvider i18n={i18n}>
      <Navigation />
    </I18nextProvider>
  );
};

export default App;
