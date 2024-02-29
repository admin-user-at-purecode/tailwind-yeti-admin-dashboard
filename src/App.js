import React from "react";

import { Provider } from "react-redux";

import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import ApplicationsToDo from "pages/applicationtodo";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar />
      <MenuBar />
      <ApplicationsToDo />
    </Provider>
  );
};

export default App;
