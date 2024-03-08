import ErrorRoute from "../errors";
import AdminRoute from "./admin/AdminRoute";
import OfficerRoute from "./officer/OfficerRoute";
import BottomNavigation from "@moleculs/bottom_navigation/BottomNavigation";

export default function PrivateRoute() {
  return [
    {
      element: <BottomNavigation />,
      children: [
        ...ErrorRoute(),
        ...OfficerRoute(),
        ...AdminRoute(),
        {
          path: "/test0",
          element: <h1>Test 0</h1>,
        },
        {
          path: "/test1",
          element: <h1>Test 1</h1>,
        },
      ],
    },
  ];
}
