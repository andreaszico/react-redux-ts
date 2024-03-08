// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./shared/routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);
console.time("test_timer");

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
  // </React.StrictMode>
);

console.timeEnd("test_timer");
