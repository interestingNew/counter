import { counterDisplayReducer, incValueNumCounterAC, resValueNumCounterAC, setValueNumCounterAC, changeValueStrCounterAC, changeDisabledButtonIncAC, changeDisabledButtonResAC } from "./counterDisplay-reducer";
import { counterSettingsData } from "./counterSettings-reducer";

let startState = {
   valueNumCounter: 0,
   valueStrCounter: "",
   disabledButtonInc: false,
   disabledButtonRes: false
}

beforeEach(()=>{
   startState = {
      valueNumCounter: 5,
      valueStrCounter: "enter values and press 'set'",
      disabledButtonInc: false,
      disabledButtonRes: false
   }
})

test('valueNumCounter should be correct incremented', ()=>{
   const endState = counterDisplayReducer(startState, incValueNumCounterAC(1))

   expect(endState.valueNumCounter).toBe(6)
})

test('valueNumCounter should be correct reset', ()=>{
   const endState = counterDisplayReducer(startState, resValueNumCounterAC(counterSettingsData.startValue))

   expect(endState.valueNumCounter).toBe(counterSettingsData.startValue)
})

test('valueNumCounter should be correct installed', ()=>{
   const endState = counterDisplayReducer(startState, setValueNumCounterAC(counterSettingsData.startValue))

   expect(endState.valueNumCounter).toBe(counterSettingsData.startValue)
})

test('valueStrCounter should be correct changed', ()=>{
   const endState = counterDisplayReducer(startState, changeValueStrCounterAC('Incorrect values!'))

   expect(endState.valueStrCounter).toBe('Incorrect values!')
})

test('disabledButtonInc should be true', ()=>{
   const endState = counterDisplayReducer(startState, changeDisabledButtonIncAC(true))

   expect(endState.disabledButtonInc).toBeTruthy
})

test('disabledButtonRes should be true', ()=>{
   const endState = counterDisplayReducer(startState, changeDisabledButtonResAC(true))

   expect(endState.disabledButtonRes).toBeTruthy
})