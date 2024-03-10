import ErrorRoute from "../errors";
import AdminRoute from "./admin/AdminRoute";
import OfficerRoute from "./officer/OfficerRoute";
import ProfileRoute from "./profile/ProfileRoute";

export default function PrivateRoute() {
  return [
    ...ErrorRoute(),
    ...OfficerRoute(),
    ...AdminRoute(),
    ...ProfileRoute(),
  ];
}
