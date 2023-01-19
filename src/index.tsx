import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./styles/index.css";
import "./styles/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </Provider>
);
