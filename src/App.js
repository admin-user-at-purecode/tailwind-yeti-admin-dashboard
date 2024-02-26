import React from "react";

import { Provider } from "react-redux";


import Store from "./services/Store";
import AuthLogin from "pages/login";

const App = () => {
  return (
    <Provider store={Store}>
      <AuthLogin/>
    </Provider>
  );
};

export default App;
