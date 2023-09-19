import { checkAuth } from "@app/global/auth/authenticationSlice";
import { User } from "@domain/base/user/user";
import { LoginResponse } from "@domain/entity/auth/login";

import { Navigate, Outlet, To, useOutletContext } from "react-router-dom";

interface Props {
  redirectPath?: To;
  allowedRoles?: string[];
}

type OutletContextType = { user: User | null };

export function useUser() {
  return useOutletContext<OutletContextType>();
}

export default function PrivateLayout({
  redirectPath = "/login",
  allowedRoles = [],
}: Props) {
  const user: LoginResponse | null = checkAuth();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user.user.role?.name || "")
  ) {
    // User is not in one of the allowed roles
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet context={{ user: user.user }} />;
}
