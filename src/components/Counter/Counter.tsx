import './Counter.module.css'
import classes from './Counter.module.css'
import { CounterSettings } from './CounterSettings/CounterSettings'
import { CounterDisplay } from './CounterDisplay/CounterDisplay'
import { useState, useEffect, ChangeEvent } from 'react'

let INCORRECT_VALUE = "Incorrect values!";
let CORRECT_VALUE = "enter values and press 'set'";

export const Counter = () => {

   const [maxValue, setMaxValue] = useState(1)
   const [startValue, setStartValue] = useState(0)
   const [disabledButtonSet, setDisabledButtonSet] = useState(false)

   const [valueNumCounter, setValueNumCounter] = useState(0)
   const [valueStrCounter, setValueStrCounter] = useState<string | null>("enter values and press 'set'")
   const [disabledButtonInc, setDisabledButtonSetInc] = useState(false)

   useEffect(() => {
      let getValStartValue = localStorage.getItem("startValue")
      let getValMaxValue = localStorage.getItem("maxValue")
      
      if (getValStartValue && getValMaxValue) {
         setValueNumCounter(JSON.parse(getValStartValue))
         setStartValue(JSON.parse(getValStartValue))
         setMaxValue(JSON.parse(getValMaxValue))
         setValueStrCounter(null)
         setDisabledButtonSet(true)
      }
   }, [])
   useEffect(() => {
      if (valueNumCounter >= maxValue) {
         setDisabledButtonSetInc(!disabledButtonInc)
      }
   }, [valueNumCounter])

   const onSetButtonClick = () => {
      localStorage.setItem("startValue", JSON.stringify(startValue))
      localStorage.setItem("maxValue", JSON.stringify(maxValue))
      
      setMaxValue(maxValue)
      setValueNumCounter(startValue)
      setValueStrCounter(null)
      setDisabledButtonSet(!disabledButtonSet)
      if (disabledButtonInc) {
         setDisabledButtonSetInc(!disabledButtonInc)
      }
   }
   const onIncButtonClick = () => {
      if (valueNumCounter < maxValue) {
         setValueNumCounter(valueNumCounter + 1)
      }
   }
   const onResetButtonClick = () => {
      setValueNumCounter(startValue)
      setDisabledButtonSetInc(false)
   }

   const changeInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
         let parseVal = parseInt(e.currentTarget.value);
         setMaxValue(parseVal);
         setDisabledButtonSet(false);
         (parseVal <= 0 || parseVal <= startValue) ?
            setValueStrCounter(INCORRECT_VALUE) :
            setValueStrCounter(CORRECT_VALUE)
      }
   const changeInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
         let parseVal = parseInt(e.currentTarget.value);
         setStartValue(parseVal);
         setDisabledButtonSet(false);
         (parseVal < 0 || parseVal >= maxValue) ?
            setValueStrCounter(INCORRECT_VALUE) :
            setValueStrCounter(CORRECT_VALUE)
      }

   return <div className={classes.wrapperCounter}>
      <CounterSettings
         maxValue={maxValue}
         startValue={startValue}
         changeInputMaxValue={changeInputMaxValue}
         changeInputStartValue={changeInputStartValue}
         onSetButtonClick={onSetButtonClick}
         valueStrCounter={valueStrCounter}
         disabledButtonSet={disabledButtonSet}/>
      <CounterDisplay
         valueNumCounter={valueNumCounter}
         onIncButtonClick={onIncButtonClick}
         onResetButtonClick={onResetButtonClick}
         valueStrCounter={valueStrCounter}
         maxValue={maxValue}
         disabledButtonInc={disabledButtonInc} />
   </div>
}