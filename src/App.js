import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import BlogList from "pages/bloglist";

const App = () => {
  return (
    <Provider store={Store}>
      <TopBar/>
      <MenuBar/>
      <BlogList />
    </Provider>
  );
};

export default App;
