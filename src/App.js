import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import BlogListCardColumns from "pages/pagesbloglistcardcolumn";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>
      <BlogListCardColumns />
    </Provider>
  );
};

export default App;
