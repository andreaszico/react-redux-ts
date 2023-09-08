import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AppDispatch } from "@app/store";
import { FC, useEffect } from "react";
import { setSplash } from "../store/slice";
import { NavigateFunction, useNavigate } from "react-router-dom";
import landingPage from "@assets/images/landing_page.png";

export const SplashScreen: FC = () => {
  const state = useAppSelector((state) => state.splashScreenState);
  const dispatch: AppDispatch = useAppDispatch();

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const splash = setTimeout(() => {
      dispatch(setSplash());
    }, 3000);

    if (state.splash) {
      navigate("/login");
    }

    return () => {
      clearTimeout(splash);
    };
  }, [dispatch, state.splash]);

  return (
    <div className="relative h-screen overflow-hidden">
      <img src={landingPage} alt="" className="absolute w-full h-full z-0" />
      <div className="absolute w-full h-full z-10 bg-black bg-opacity-20"></div>
      <div className="relative z-50 flex flex-col items-start py-5 px-5">
        <p className=" text-xl font-bold text-white tracking-wider text-left leading-loose">
          Sistem Retribusi Sampah
        </p>
        <p className="text-sm font-normal text-white tracking-wider text-left mb-5">
          Optimalkan Pelayanan Kebersihan dengan Membayar Retribusi Sampah pada
          waktunya
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
