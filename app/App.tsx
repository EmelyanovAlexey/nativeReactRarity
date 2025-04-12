import React from "react";
import { I18nextProvider } from "react-i18next";
import Navigation from "../navigation/Navigation";
import i18n from "../locales/i18n";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Navigation />
    </I18nextProvider>
  );
};

export default App;
