import { User } from "@domain/base/user/user";
import { createSlice } from "@reduxjs/toolkit";
import { getInitialUser } from "./thunk";

export interface DashboardState {
  isLoading: boolean;
  error: string | null;
  user: User | null;
}

const initialState: DashboardState = {
  isLoading: false,
  error: null,
  user: null
};

const dashboardSlice = createSlice({
  name: "dashboard_slice",
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

export const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;
