import ErrorRoute from "../errors";
import AdminRoute from "./admin/AdminRoute";
import OfficerRoute from "./officer/OfficerRoute";
import BottomNavigation from "@moleculs/bottom_navigation/BottomNavigation";

export default function PrivateRoute() {
  return [
    {
      element: <BottomNavigation />,
      children: [...ErrorRoute(), ...OfficerRoute(), ...AdminRoute()],
    },
  ];
}
