import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import PagesFAQsLayout1 from "pages/faqlayout1";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>
      <PagesFAQsLayout1/>
    </Provider>
  );
};

export default App;
