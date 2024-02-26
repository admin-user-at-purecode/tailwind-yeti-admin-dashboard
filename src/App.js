import React from "react";

import { Provider } from "react-redux";

import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import PagesFAQsLayout2 from "pages/faqlayout2";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar />
      <MenuBar />
      <PagesFAQsLayout2 />
    </Provider>
  );
};

export default App;
