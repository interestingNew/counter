import './WrapperCounter.module.css'
import classes from './WrapperCounter.module.css'
import { SettingsCounter } from './SettingsCounter/SettingsCounter'
import { Counter } from './Counter/Counter'
import { useState, useEffect } from 'react'

export const WrapperCounter = () => {

   const [maxValue, setMaxValue] = useState(1)
   const [startValue, setStartValue] = useState(0)
   const [valueNumCounter, setValueNumCounter] = useState(0)
   const [valueStrCounter, setValueStrCounter] = useState<string|null>(null)

   const saveSettingsValue = () => {
         localStorage.setItem("startValue", JSON.stringify(startValue))
         localStorage.setItem("maxValue", JSON.stringify(maxValue))
         setMaxValue(maxValue)
         setValueNumCounter(startValue)
         setValueStrCounter(null)
   }
   const resetValue = () => {
      localStorage.clear()
      setValueNumCounter(startValue)
   }
   const incValue = () => {
      if(valueNumCounter < maxValue) {
         setValueNumCounter(valueNumCounter + 1)
      }
   }
   
   useEffect(() => {
      let getValStartValue = localStorage.getItem("startValue")
      let getValMaxValue = localStorage.getItem("maxValue")
      if (getValStartValue) {
         setValueNumCounter(JSON.parse(getValStartValue))
         setStartValue(JSON.parse(getValStartValue))
      } if (getValMaxValue) {
         setMaxValue(JSON.parse(getValMaxValue))
      }
   }, [])


   return <div className={classes.wrapperCounter}>
      <SettingsCounter
         maxValue={maxValue}
         setMaxValue={setMaxValue}
         startValue={startValue}
         setStartValue={setStartValue}
         saveSettingsValue={saveSettingsValue}
         valueStrCounter={valueStrCounter}
         setValueStrCounter={setValueStrCounter}
         valueNumCounter={valueNumCounter} />
      <Counter
         valueNumCounter={valueNumCounter}
         incValue={incValue}
         resetValue={resetValue}
         startValue={startValue}
         valueStrCounter={valueStrCounter}
         maxValue={maxValue} />
   </div>
}