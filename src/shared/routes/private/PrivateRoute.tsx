import {
  Dashboard,
  dashboardRouteName,
} from "@features/Dashboard/view/Dashboard";
import OfficerRoute from "./officer/OfficerRoute";
import PrivateLayout from "@organisms/layout/PrivateLayout";

export default function PrivateRoute() {
  return [
    {
      element: <PrivateLayout />,
      children: [
        { path: dashboardRouteName, element: <Dashboard /> },
      ],
    },
    ...OfficerRoute(),
  ];
}
