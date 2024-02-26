import React from "react";

import { Provider } from "react-redux";

import Store from "./services/Store";
import AuthForgotPassword from "pages/forgotpassword";

const App = () => {
  return (
    <Provider store={Store}>
      <AuthForgotPassword />
    </Provider>
  );
};

export default App;
