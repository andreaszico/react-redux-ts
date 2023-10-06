import { Navigate } from "react-router-dom";

import { Login } from "@features/Login/view/Login";
import { SplashScreen } from "@features/SplashScreen/view/SplashScreen";
import Storage from "@features/Storage/view/Storage";
import { routesName } from "../constants";

export default function PublicRoute() {
  const { PUBLIC } = routesName;
  return [
    { path: "/", element: <SplashScreen /> },
    { path: PUBLIC.LOGIN, element: <Login /> },
    { path: PUBLIC.STORAGE, element: <Storage /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}
