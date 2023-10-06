import {
  Dashboard
} from "@features/Dashboard/view/Dashboard";
import OfficerRoute from "./officer/OfficerRoute";
import PrivateLayout from "@organisms/layout/PrivateLayout";
import { routesName } from "../constants";

export default function PrivateRoute() {
  const { DASHBOARD } = routesName.PRIVATE;

  return [
    {
      element: <PrivateLayout />,
      children: [
        { path: DASHBOARD, element: <Dashboard /> },
      ],
    },
    ...OfficerRoute(),
  ];
}
