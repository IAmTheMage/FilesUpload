import React from "react";
import { Provider } from "react-redux";
import Router from "./routes";
import GlobalStyle from "./globalStyle";
import store from "./redux/store";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router></Router>
      </Provider>
    </>
  );
}

export default App;
