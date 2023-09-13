import { getInitialUser } from "@app/global/auth/thunk";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AppDispatch } from "@app/store";
import { FC, useEffect } from "react";

export const dashboardRouteName = "/dashboard";

export const Dashboard: FC = () => {
  const { message } = useAppSelector((state) => state.dashboardState);
  const { user } = useAppSelector((state) => state.authState);

  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialUser());

    return () => {
    };
  }, []);

  return (
    <div className="">
      Hello {message}, {user?.name}
    </div>
  );
};
