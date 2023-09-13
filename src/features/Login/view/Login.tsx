import { Button } from "@atoms/buttons";
import { Input } from "@atoms/inputs";
import { FC, useEffect, useRef } from "react";
import loginImage from "@assets/images/login.png";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AppDispatch } from "@app/store";
import { login } from "../store/thunk";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { dashboardRouteName } from "@features/Dashboard/view/Dashboard";
import Loading from "@atoms/loading";

export const loginRouteName = "/login";

export const Login: FC = () => {
  const state = useAppSelector((state) => state.loginScreenState);
  const dispatch: AppDispatch = useAppDispatch();

  const inputUsernameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (state.success) {
      navigate(dashboardRouteName);
    }
  }, [state.success]);

  const handleClick = () => {
    const username = inputUsernameRef.current?.value;
    const password = inputPasswordRef.current?.value;

    dispatch(login({ username: username, password: password }));
  };

  return state.isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col h-screen w-screen p-5">
      <div className="flex">
        <p className="text-3xl font-semibold text-primary">
          Sistem Retribusi Sampah
        </p>
        <img src={loginImage} alt="" className="w-40" />
      </div>
      <p className="text-3xl font-medium text-primary mt-4 text-center">
        Login
      </p>
      <p className="text-sm mt-3 text-secondary text-center">
        Silahkan login dengan username dan password yang terdaftar di sistem
        Retribusi Sampah Kabupaten Toba
      </p>
      <Input
        ref={inputUsernameRef}
        label="Username"
        name="username"
        classNames="mt-4"
        labelColor={"primary"}
        placeholder="Masukkan username"
      />
      <Input
        ref={inputPasswordRef}
        label="Password"
        name="password"
        classNames="mt-4"
        labelColor={"primary"}
        placeholder="Masukkan password"
        obscure
      />
      <a className="mt-3 text-sm text-sky-400 underline">Lupa Password ?</a>
      <Button
        onClick={() => handleClick()}
        text="Login"
        textSize="sm"
        width="full"
        height={40}
        classNames={"mt-5"}
      />
      <a className="mt-3 text-sm text-center text-gray-500">
        Terms and Services
      </a>
    </div>
  );
};
