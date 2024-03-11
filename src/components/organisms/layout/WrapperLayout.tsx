import { checkAuth } from "@app/global/auth/authenticationSlice";
import { User } from "@domain/base/user/user";
import { LoginResponse } from "@domain/entity/auth/login";
import { routesName } from "@shared/routes/constants";
import { useEffect } from "react";
import BottomNavigation from "@moleculs/bottom_navigation/BottomNavigation";

import { Outlet, To, useNavigate, useOutletContext } from "react-router-dom";
import { ROLES } from "@app/constants/roles";

interface Props {
  redirectPath?: To;
}

type OutletContextType = { user: User | null };

export function useUser() {
  return useOutletContext<OutletContextType>();
}

export default function WrapperLayout({
  redirectPath = routesName.PUBLIC.LOGIN,
}: Props) {
  const data: LoginResponse | null = checkAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate(redirectPath, {
        replace: true,
        state: { key: "value" },
      });
      return;
    }
  }, []);

  return (
    <div className="relative h-screen">
      <Outlet context={{ user: data?.user }} />
      <BottomNavigation
        userRole={(data?.user.role?.name as ROLES) ?? ROLES.Admin}
      />
    </div>
  );
}
