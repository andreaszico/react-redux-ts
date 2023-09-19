import { Navigate } from "react-router-dom";

import { Login, loginRouteName } from "@features/Login/view/Login";
import { SplashScreen } from "@features/SplashScreen/view/SplashScreen";
import Storage, { storageRouteName } from "@features/Storage/view/Storage";

export default function PublicRoute() {
  return [
    { path: "/", element: <SplashScreen /> },
    { path: loginRouteName, element: <Login /> },
    { path: storageRouteName, element: <Storage /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}
