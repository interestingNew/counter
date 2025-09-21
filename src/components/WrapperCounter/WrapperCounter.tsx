import './WrapperCounter.module.css'
import classes from './WrapperCounter.module.css'
import { SettingsCounter } from './SettingsCounter/SettingsCounter'
import { Counter } from './Counter/Counter'
import { useState, useEffect } from 'react'
import { ChangeEvent } from 'react'

export const WrapperCounter = () => {

   const [maxValue, setMaxValue] = useState(0)
   const [startValue, setStartValue] = useState(0)
   const [valueCounter, setValueCounter] = useState(0)

   const saveSettingsValue = () => {
         localStorage.setItem("startValue", JSON.stringify(startValue))
         setMaxValue(maxValue)
         setValueCounter(startValue)
   }
   const resetValue = () => {
      localStorage.clear()
      setValueCounter(startValue)
   }
   const incValue = () => {
      if(valueCounter < maxValue) {
         setValueCounter(valueCounter + 1)
      }
   }
   useEffect(() => {
      let getVal = localStorage.getItem("startValue")
      if (getVal) {
         setValueCounter(JSON.parse(getVal))
         setStartValue(JSON.parse(getVal))
      }
   }, [])

   return <div className={classes.wrapperCounter}>
      <SettingsCounter
         maxValue={maxValue}
         setMaxValue={setMaxValue}
         startValue={startValue}
         setStartValue={setStartValue}
         saveSettingsValue={saveSettingsValue} />
      <Counter
         valueCounter={valueCounter}
         incValue={incValue}
         resetValue={resetValue} />
   </div>
}