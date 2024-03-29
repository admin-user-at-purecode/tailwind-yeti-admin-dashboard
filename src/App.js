import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>
    </Provider>
  );
};

export default App;
