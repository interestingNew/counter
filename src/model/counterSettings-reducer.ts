import { createAction, createReducer } from "@reduxjs/toolkit";

export const incMaxValueAC = createAction<number>('counterSettings/increment_maxValue')
export const decMaxValueAC = createAction<number>('counterSettings/decrement_maxValue')
export const changeMaxValueAC = createAction<number>('counterSettings/change_maxValue')
export const incStartValueAC = createAction<number>('counterSettings/increment_startValue')
export const decStartValueAC = createAction<number>('counterSettings/decrement_startValue')
export const changeStartValueAC = createAction<number>('counterSettings/change_startValue')
export const changeDisabledButtonSetAC = createAction<boolean>('counterSettings/change_disabledButtonSet')

export type counterSettingsDataType = {
   maxValue: number,
   startValue: number,
   disabledButtonSet: boolean
}

export const counterSettingsData = {
   maxValue: 1,
   startValue: 0,
   disabledButtonSet: false
}

export const counterSettingReducer = createReducer(counterSettingsData, (builder) => {
builder
.addCase(incMaxValueAC, (state, action) => {
   state.maxValue += action.payload
})
.addCase(decMaxValueAC, (state, action) => {
   state.maxValue -= action.payload
})
.addCase(changeMaxValueAC, (state, action) => {
   state.maxValue = action.payload
})
.addCase(incStartValueAC, (state, action) => {
   state.startValue += action.payload
})
.addCase(decStartValueAC, (state, action) => {
   state.startValue -= action.payload
})
.addCase(changeStartValueAC, (state, action) => {
   state.startValue = action.payload
})
.addCase(changeDisabledButtonSetAC, (state, action) => {
   state.disabledButtonSet = action.payload
})
})

