import {
  Dashboard,
  dashboardRouteName,
} from "@features/Dashboard/view/Dashboard";
import { Login, loginRouteName } from "@features/Login/view/Login";
import { SplashScreen } from "@features/SplashScreen/view/SplashScreen";
import Storage, { storageRouteName } from "@features/Storage/view/Storage";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
    children: [],
  },
  {
    path: storageRouteName,
    Component: Storage,
  },
  {
    path: dashboardRouteName,
    Component: Dashboard,
    children: [],
  },
  {
    path: loginRouteName,
    Component: Login,
  },
]);
