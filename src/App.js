import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import ComponentsAlerts from "pages/componentAlert";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>
      <ComponentsAlerts/>
    </Provider>
  );
};

export default App;
