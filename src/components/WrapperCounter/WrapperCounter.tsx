import './WrapperCounter.module.css'
import classes from './WrapperCounter.module.css'
import { SettingsCounter } from './SettingsCounter/SettingsCounter'
import { Counter } from './Counter/Counter'
import { useState, useEffect } from 'react'
import { ChangeEvent } from 'react'

export const WrapperCounter = () => {

   const [maxValue, setMaxValue] = useState(0)
   const [startValue, setStartValue] = useState(0)
   const [valueNumCounter, setValueNumCounter] = useState(0)
   const [valueStrCounter, setValueStrCounter] = useState<string|null>(null)

   const saveSettingsValue = () => {
         localStorage.setItem("startValue", JSON.stringify(startValue))
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
      let getVal = localStorage.getItem("startValue")
      if (getVal) {
         setValueNumCounter(JSON.parse(getVal))
         setStartValue(JSON.parse(getVal))
      }
   }, [])


   return <div className={classes.wrapperCounter}>
      <SettingsCounter
         maxValue={maxValue}
         setMaxValue={setMaxValue}
         startValue={startValue}
         setStartValue={setStartValue}
         saveSettingsValue={saveSettingsValue}
         setValueStrCounter={setValueStrCounter} />
      <Counter
         valueNumCounter={valueNumCounter}
         incValue={incValue}
         resetValue={resetValue}
         startValue={startValue}
         valueStrCounter={valueStrCounter} />
   </div>
}