import {createSlice} from "@reduxjs/toolkit";


export interface DashboardState {
    loading: boolean;
    error: string | null;
}

const initialState: DashboardState = {
    loading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: "dashboard_slice",
    initialState,
    reducers: {
        
    },

});

export const {} = dashboardSlice.actions

export default dashboardSlice.reducer;