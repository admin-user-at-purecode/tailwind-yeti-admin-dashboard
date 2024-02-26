import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import BlogListCardRows from "pages/bloglistcardrow";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/><BlogListCardRows />
    </Provider>
  );
};

export default App;
