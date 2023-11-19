import { checkAuth } from "@app/global/auth/authenticationSlice";
import { User } from "@domain/base/user/user";
import { LoginResponse } from "@domain/entity/auth/login";
import BottomNavigation from "@moleculs/bottom_navigation/BottomNavigation";
import { routesName } from "@shared/routes/constants";

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
  redirectPath = routesName.PUBLIC.LOGIN,
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
    return <Navigate to={routesName.PRIVATE.UNAUTHORIZED} replace />;
  }

  return (
    <div className="relative h-screen">
      <Outlet context={{ user: user.user }} />
      <BottomNavigation />
    </div>
  );
}
