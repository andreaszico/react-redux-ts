import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AppDispatch } from "@app/store";
import { FC, useEffect } from "react";
import { getInitialUser } from "../store/thunk";

export const dashboardRouteName = "/dashboard";

export const Dashboard: FC = () => {
  const state = useAppSelector((state) => state.dashboardState);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialUser());

    return () => {
      
    };
  }, []);

  return <div className="">Hello {state.user?.name}</div>;
};
