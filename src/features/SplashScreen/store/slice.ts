import { createSlice } from "@reduxjs/toolkit";

export interface SplashScreenState {
  loading: boolean;
  error: string | null;
  splash: boolean,
}

const initialState: SplashScreenState = {
  loading: false,
  error: null,
  splash: false,
};

const splashScreen = createSlice({
  name: "splash_screen",
  initialState,
  reducers: {
    setSplash: (state) => {
        state.splash = true;
    }
  },
});

export const { setSplash } = splashScreen.actions;

export default splashScreen.reducer;
