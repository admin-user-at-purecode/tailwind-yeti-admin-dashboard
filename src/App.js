import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import PagesInvoice from "pages/invoice";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>
      <PagesInvoice/>
    </Provider>
  );
};

export default App;
