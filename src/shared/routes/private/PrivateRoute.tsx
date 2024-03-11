import ErrorRoute from "../errors";
import AdminRoute from "./admin/AdminRoute";
import OfficerRoute from "./officer/OfficerRoute";
import ProfileRoute from "./profile/ProfileRoute";
import WrapperLayout from "@organisms/layout/WrapperLayout";

export default function PrivateRoute() {
  return [
    {
      element: <WrapperLayout />,
      children: [
        ...ErrorRoute(),
        ...OfficerRoute(),
        ...ProfileRoute(),
        ...AdminRoute(),
      ],
    },
  ];
}
