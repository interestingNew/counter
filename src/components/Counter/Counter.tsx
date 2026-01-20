import './Counter.module.css'
import classes from './Counter.module.css'
import { CounterSettings } from './CounterSettings/CounterSettings'
import { CounterDisplay } from './CounterDisplay/CounterDisplay'
import { useEffect, ChangeEvent } from 'react'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { selectCounterSettingsData } from '../../model/counterSettings-selector'
import { selectCounterDisplayData } from '../../model/counterDisplay-selector'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { changeDisabledButtonIncAC, changeDisabledButtonResAC, changeValueStrCounterAC, incValueNumCounterAC, setValueNumCounterAC } from '../../model/counterDisplay-reducer'
import { changeDisabledButtonSetAC, changeMaxValueAC, changeStartValueAC } from '../../model/counterSettings-reducer'

let INCORRECT_VALUE = "Incorrect values!";
let CORRECT_VALUE = "enter values and press 'set'";

export const Counter = () => {
   const counterSettingsData = useAppSelector(selectCounterSettingsData)
   const counterDisplayData = useAppSelector(selectCounterDisplayData)

   const dispatch = useAppDispatch()

   // useEffect(() => {
   //    let getValStartValue = localStorage.getItem("startValue")
   //    let getValMaxValue = localStorage.getItem("maxValue")
      
   //    if (getValStartValue && getValMaxValue) {
   //       setValueNumCounter(JSON.parse(getValStartValue))
   //       setStartValue(JSON.parse(getValStartValue))
   //       setMaxValue(JSON.parse(getValMaxValue))
   //       setValueStrCounter('')
   //       setDisabledButtonSet(true)
   //    }
   // }, [])
   useEffect(() => {
      if (counterDisplayData.valueNumCounter >= counterSettingsData.maxValue) {
         dispatch(changeDisabledButtonIncAC(!counterDisplayData.disabledButtonInc))
      }
   }, [counterDisplayData.valueNumCounter])

   const onSetButtonClick = () => {
      dispatch(setValueNumCounterAC(counterSettingsData.startValue))
      dispatch(changeValueStrCounterAC(''))
      dispatch(changeDisabledButtonSetAC(!counterSettingsData.disabledButtonSet))
      
      if (counterDisplayData.disabledButtonInc) {
         dispatch(changeDisabledButtonIncAC(!counterDisplayData.disabledButtonInc))
         //dispatch(changeDisabledButtonResAC(!counterDisplayData.disabledButtonRes))
      }
   }
   const onIncButtonClick = () => {
      if (counterDisplayData.valueNumCounter < counterSettingsData.maxValue) {
         dispatch(incValueNumCounterAC(1))
         dispatch(changeDisabledButtonResAC(false))
      }
   }
   const onResetButtonClick = () => {
      dispatch(setValueNumCounterAC(counterSettingsData.startValue))
      dispatch(changeDisabledButtonIncAC(false))
      dispatch(changeDisabledButtonResAC(true))
   }

   const changeInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
         let parseVal = parseInt(e.currentTarget.value);

         dispatch(changeMaxValueAC(parseVal))

         if(counterSettingsData.startValue >= 0) {
            dispatch(changeDisabledButtonSetAC(false))
         }

         (parseVal <= 0 || parseVal <= counterSettingsData.startValue) ?
            dispatch(changeValueStrCounterAC(INCORRECT_VALUE)) :
            dispatch(changeValueStrCounterAC(CORRECT_VALUE))
      }
   const changeInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
         let parseVal = parseInt(e.currentTarget.value);

         dispatch(changeStartValueAC(parseVal))
         dispatch(changeDisabledButtonSetAC(false));

         (parseVal < 0 || parseVal >= counterSettingsData.maxValue) ?
         dispatch(changeValueStrCounterAC(INCORRECT_VALUE)) :
         dispatch(changeValueStrCounterAC(CORRECT_VALUE))
      }

   return <div className={classes.wrapperCounter}>
      <CounterSettings
         counterSettingsData={counterSettingsData}
         counterDisplayData={counterDisplayData}
         changeInputMaxValue={changeInputMaxValue}
         changeInputStartValue={changeInputStartValue}
         onSetButtonClick={onSetButtonClick} />
      <CounterDisplay
         counterDisplayData={counterDisplayData}
         counterSettingsData={counterSettingsData}
         onIncButtonClick={onIncButtonClick}
         onResetButtonClick={onResetButtonClick} />
   </div>
}