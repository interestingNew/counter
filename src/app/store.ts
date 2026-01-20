import { combineReducers } from "redux";
import { counterSettingReducer } from "../model/counterSettings-reducer";
import { counterDisplayReducer } from "../model/counterDisplay-reducer";
import { configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
   counterSettingsData: counterSettingReducer,
   counterDisplayData: counterDisplayReducer
})

export const store = configureStore({
   reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store