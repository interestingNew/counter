import { counterSettingReducer, incMaxValueAC, decMaxValueAC, changeMaxValueAC, incStartValueAC, decStartValueAC, changeStartValueAC, changeDisabledButtonSetAC } from "./counterSettings-reducer"

let startState = {
   maxValue: 0,
   startValue: 0,
   disabledButtonSet: false
}

beforeEach(()=>{
   startState = {
      maxValue: 2,
      startValue: 1,
      disabledButtonSet: false
   }
})

test('maxValue should be incremented', ()=>{

   const endValue = counterSettingReducer(startState, incMaxValueAC(1))

   expect(endValue.maxValue).toBe(3)
})

test('maxValue should be decremented', ()=>{

   const endValue = counterSettingReducer(startState, decMaxValueAC(1))

   expect(endValue.maxValue).toBe(1)
})

test('maxValue should be changed', ()=>{

   const endValue = counterSettingReducer(startState, changeMaxValueAC(7))

   expect(endValue.maxValue).toBe(7)
})

test('startValue should be incremented', ()=>{

   const endValue = counterSettingReducer(startState, incStartValueAC(1))

   expect(endValue.startValue).toBe(2)
})

test('startValue should be decremented', ()=>{

   const endValue = counterSettingReducer(startState, decStartValueAC(1))

   expect(endValue.startValue).toBe(0)
})

test('startValue should be changed', ()=>{

   const endValue = counterSettingReducer(startState, changeStartValueAC(8))

   expect(endValue.startValue).toBe(8)
})

test('disabledButtonSet should be true', ()=>{

   const endValue = counterSettingReducer(startState, changeDisabledButtonSetAC(true))

   expect(endValue.disabledButtonSet).toBeTruthy()
})