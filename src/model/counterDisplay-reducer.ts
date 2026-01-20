import { createAction, createReducer } from "@reduxjs/toolkit";

export type counterDisplayDataType = {
   valueNumCounter: number,
   valueStrCounter: string,
   disabledButtonInc: boolean,
   disabledButtonRes: boolean
}

export const counterDisplayData = {
   valueNumCounter: 0,
   valueStrCounter: "enter values and press 'set'",
   disabledButtonInc: false,
   disabledButtonRes: true
}

export const incValueNumCounterAC = createAction<number>('counterDisplay/increment_valueNumCounter')
export const resValueNumCounterAC = createAction<number>('counterDisplay/reset_valueNumCounter')
export const setValueNumCounterAC = createAction<number>('counterDisplay/set_valueNumCounter')
export const changeValueStrCounterAC = createAction<string>('counterDisplay/change_valueStrCounter')
export const changeDisabledButtonIncAC = createAction<boolean>('counterDisplay/change_disabledButtonInc')
export const changeDisabledButtonResAC = createAction<boolean>('counterDisplay/change_disabledButtonRes')

export const counterDisplayReducer = createReducer(counterDisplayData, (builder) => {
   builder
   .addCase(incValueNumCounterAC, (state, action) => {
      state.valueNumCounter += action.payload
   })
   .addCase(resValueNumCounterAC, (state, action) => {
      state.valueNumCounter = action.payload
   })
   .addCase(setValueNumCounterAC, (state, action) => {
      state.valueNumCounter = action.payload
   })
   .addCase(changeValueStrCounterAC, (state,action) => {
      state.valueStrCounter = action.payload
   })
   .addCase(changeDisabledButtonIncAC, (state,action) => {
      state.disabledButtonInc = action.payload
   }).addCase(changeDisabledButtonResAC, (state,action) => {
      state.disabledButtonRes = action.payload
   })
})