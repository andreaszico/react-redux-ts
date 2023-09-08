import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InputLogin {
  username?: string,
  password?: string,
}

export interface LoginScreenState {
  isLoading: boolean,
}

const initialState: LoginScreenState = {
  isLoading: false,
};

const loginScreen = createSlice({
  name: "login_screen",
  initialState,
  reducers: {
    onNextStage: (state, action: PayloadAction<InputLogin>) => {
     
    },
  },
});

export const { onNextStage } = loginScreen.actions;

export default loginScreen.reducer;
