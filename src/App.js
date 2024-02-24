import React from "react";

import { Provider } from "react-redux";

import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import Modal from "pages/modals"

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>

      <Modal/>
    </Provider>
  );
};

export default App;
