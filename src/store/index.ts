import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./reducers/userReducer";


export const rootReducer = combineReducers({
    UserReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()

});

export type  RootState = ReturnType<typeof rootReducer>;
