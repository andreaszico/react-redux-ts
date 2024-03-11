import "@app/global/extension/string/string-extensions";
import { useAppSelector } from "@app/hooks";
import { useUser } from "@organisms/layout/WrapperLayout";
import { FC, useEffect } from "react";

export const dashboardRouteName = "/dashboard";

export const Dashboard: FC = () => {
  const { message } = useAppSelector((state) => state.dashboardState);
  const { user } = useUser();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="">
      Hello {message}, {user?.name?.reverse()}
    </div>
  );
};
