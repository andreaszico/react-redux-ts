import ErrorRoute from "../errors";
import AdminRoute from "./admin/AdminRoute";
import OfficerRoute from "./officer/OfficerRoute";

export default function PrivateRoute() {
  return [...ErrorRoute(), ...OfficerRoute(), ...AdminRoute()];
}
