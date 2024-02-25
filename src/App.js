import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import PagesPricing from "pages/pricing";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>
      <PagesPricing/>
    </Provider>
  );
};

export default App;
