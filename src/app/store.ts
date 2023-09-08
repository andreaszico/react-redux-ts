import {configureStore} from "@reduxjs/toolkit";
import {appLogger} from "../shared/logger/logger";

import dashboardReducer from '../features/Dashboard/store/slice'
import splashScreenReducer from '../features/SplashScreen/store/slice'
import loginScreenReducer from '../features/Login/store/slice'

export const store = configureStore({
    reducer: {
        dashboardState: dashboardReducer,
        splashScreenState: splashScreenReducer,
        loginScreenState: loginScreenReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(appLogger)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;