import { RootState } from "../app/store";
import { counterSettingsDataType } from "./counterSettings-reducer";

export const selectCounterSettingsData = (state: RootState): counterSettingsDataType => state.counterSettingsData
