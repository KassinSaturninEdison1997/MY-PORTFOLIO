import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/index.css";
import "./styles/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
