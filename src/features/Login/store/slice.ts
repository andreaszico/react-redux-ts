import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunk";
import { AxiosError } from "axios";
import ZStorage from "@shared/utils/z_storage";

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
    // onNextStage: (state, action: PayloadAction<LoginRequest>) => {},
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
        state.success = true;
        state.isLoading = false;
        setToStorage(action.payload);
      });
  },
});

async function setToStorage(data: any) {
  ZStorage.setItem(ZStorage.accessTokenKey, JSON.stringify(data));
}

// export const { onNextStage } = loginScreen.actions;

export default loginScreen.reducer;
