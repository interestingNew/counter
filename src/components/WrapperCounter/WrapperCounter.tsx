import './WrapperCounter.module.css'
import classes from './WrapperCounter.module.css'
import { SettingsCounter } from './SettingsCounter/SettingsCounter'
import { Counter } from './Counter/Counter'
import { useState, useEffect } from 'react'

export const WrapperCounter = () => {

   const [maxValue, setMaxValue] = useState(1)
   const [startValue, setStartValue] = useState(0)
   const [valueNumCounter, setValueNumCounter] = useState(0)
   const [valueStrCounter, setValueStrCounter] = useState<string | null>("enter values and press 'set'")
   const [disabledButtonSet, setDisabledButtonSet] = useState(false)
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

   const saveSettingsValue = () => {
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
   const resetValue = () => {
      setValueNumCounter(startValue)
      setDisabledButtonSetInc(false)
   }
   const incValue = () => {
      if (valueNumCounter < maxValue) {
         setValueNumCounter(valueNumCounter + 1)
      }
   }

   return <div className={classes.wrapperCounter}>
      <SettingsCounter
         maxValue={maxValue}
         setMaxValue={setMaxValue}
         startValue={startValue}
         setStartValue={setStartValue}
         saveSettingsValue={saveSettingsValue}
         valueStrCounter={valueStrCounter}
         setValueStrCounter={setValueStrCounter}
         valueNumCounter={valueNumCounter}
         disabledButtonSet={disabledButtonSet}
         setDisabledButtonSet={setDisabledButtonSet} />
      <Counter
         valueNumCounter={valueNumCounter}
         incValue={incValue}
         resetValue={resetValue}
         startValue={startValue}
         valueStrCounter={valueStrCounter}
         maxValue={maxValue}
         disabledButtonInc={disabledButtonInc}
         setDisabledButtonSetInc={setDisabledButtonSetInc} />
   </div>
}