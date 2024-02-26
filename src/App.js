import React from "react";

import { Provider } from "react-redux";

import Store from "./services/Store";
import AuthRegister from "pages/register";

const App = () => {
  return (
    <Provider store={Store}>
      <AuthRegister />
    </Provider>
  );
};

export default App;