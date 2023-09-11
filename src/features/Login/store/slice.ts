import { LoginRequest } from "@domain/entity/auth/login";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login } from "./thunk";
import { AxiosError } from "axios";
import ZStorage from "@shared/utils/z_storage";

const zStorage = ZStorage.getInstance();

export interface LoginScreenState {
  isLoading: boolean;
  error: any | AxiosError | null;
  success: boolean;
}

const initialState: LoginScreenState = {
  isLoading: false,
  success: false,
  error: null,
};

const loginScreen = createSlice({
  name: "login_screen",
  initialState,
  reducers: {
    onNextStage: (state, action: PayloadAction<LoginRequest>) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        setToStorage(action.payload);
      });
  },
});

async function setToStorage(data: any) {
  zStorage.setItem(ZStorage.accessTokenKey, JSON.stringify(data));
  const arr: any = await zStorage.getItem(ZStorage.accessTokenKey);
  console.log(arr);
}

export const { onNextStage } = loginScreen.actions;

export default loginScreen.reducer;
