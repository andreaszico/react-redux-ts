import { LoginResponse } from "@domain/entity/auth/login";
import { createSlice } from "@reduxjs/toolkit";
import ZStorage from "@shared/utils/z_storage";
import { getInitialUser } from "./thunk";
import { User } from "@domain/base/user/user";

export interface AuthenticationState {
  isLoading: boolean;
  error: any;
  success: boolean;
  user: User | null;
}
const zStorage = ZStorage.getInstance();

const initialState: AuthenticationState = {
  isLoading: false,
  success: false,
  error: null,
  user: {},
};

const Authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInitialUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInitialUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getInitialUser.fulfilled, (state, action) => {
        state.user = action.payload as User;
      });
  },
});

export const {} = Authentication.actions;

export default Authentication.reducer;