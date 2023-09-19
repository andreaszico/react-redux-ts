import { Navigate, createBrowserRouter } from "react-router-dom";
import PublicRoute from "./public/PublicRoute";
import PrivateRoute from "./private/PrivateRoute";

export const routers = createBrowserRouter([
  ...PrivateRoute(),
  ...PublicRoute(),
  { path: "*", element: <Navigate to={'/notfound'} replace /> },
]);
