import { RootState } from "../app/store";
import { counterDisplayDataType } from "./counterDisplay-reducer";


export const selectCounterDisplayData = (state:RootState): counterDisplayDataType => state.counterDisplayData