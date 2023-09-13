import { createSlice } from "@reduxjs/toolkit";

export interface DashboardState {
  isLoading: boolean;
  error: string | null;
  message: string;
}

const initialState: DashboardState = {
  isLoading: false,
  error: null,
  message: 'Welcome'
};

const dashboardSlice = createSlice({
  name: "dashboard_slice",
  initialState,
  reducers: {},
  
});

export const {} = dashboardSlice.actions;

export default dashboardSlice.reducer;
