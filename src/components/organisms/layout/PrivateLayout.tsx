import { checkAuth, setUser } from "@app/global/auth/authenticationSlice";
import { useAppDispatch } from "@app/hooks";
import { AppDispatch } from "@app/store";
import { User } from "@domain/base/user/user";
import { LoginResponse } from "@domain/entity/auth/login";
import { routesName } from "@shared/routes/constants";
import { useEffect } from "react";

import { Outlet, To, useNavigate, useOutletContext } from "react-router-dom";

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
  const dispatch: AppDispatch = useAppDispatch();

  const data: LoginResponse | null = checkAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate(redirectPath, {
        replace: true,
        state: { key: "value" },
      });
      return;
    } else {
      dispatch(setUser(data.user));
    }
    if (
      allowedRoles.length > 0 &&
      !allowedRoles.includes(data.user.role?.name || "")
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
    <div>
      <Outlet context={{ user: data?.user }} />
    </div>
  );
}
