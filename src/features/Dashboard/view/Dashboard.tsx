import "@app/global/extension/string/string-extensions";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AppDispatch } from "@app/store";
import { useUser } from "@organisms/layout/PrivateLayout";
import { FC, useEffect } from "react";

export const dashboardRouteName = "/dashboard";

export const Dashboard: FC = () => {
  const { message } = useAppSelector((state) => state.dashboardState);
  const { user } = useUser();
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="">
      Hello {message}, {user?.name?.reverse()}
    </div>
  );
};
