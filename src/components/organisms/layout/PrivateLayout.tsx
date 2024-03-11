import { routesName } from "@shared/routes/constants";
import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "./WrapperLayout";
import BottomNavigation from "@moleculs/bottom_navigation/BottomNavigation";
import { ROLES } from "@app/constants/roles";

interface Props {
  allowedRoles?: string[];
  children?: string | JSX.Element | JSX.Element[];
}

export default function PrivateLayout({ allowedRoles = [] }: Props) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      allowedRoles.length > 0 &&
      !allowedRoles.includes(user?.role?.name || "")
    ) {
      const roles = allowedRoles.map((el) =>
        el.split("_").join(" ").toLocaleUpperCase()
      );
      navigate(routesName.ERROR.UNAUTHORIZED, {
        replace: true,
        state: { roles: roles },
      });
      return;
    }
  }, []);

  return (
    <div className="relative h-screen">
      <Outlet context={{ user: user }} />
      <BottomNavigation userRole={(user?.role?.name as ROLES) ?? ROLES.Admin} />
    </div>
  );
}
