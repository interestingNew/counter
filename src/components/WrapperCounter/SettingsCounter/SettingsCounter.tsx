import { useState } from "react"
import "./SettingsCounter.module.css"
import classes from "./SettingsCounter.module.css"
import { ChangeEvent } from "react"

type SettingsCounterProps = {
   maxValue: number
   setMaxValue: (maxVal: number)=>void
   startValue: number
   setStartValue: (startVal: number)=>void
   saveSettingsValue: ()=>void
}

export const SettingsCounter = (props: SettingsCounterProps) => {
   
   const buttonSetHandler = () => {
         props.saveSettingsValue()
   }
   const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setMaxValue(parseInt(e.currentTarget.value))
   }
   const inputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setStartValue(parseInt(e.currentTarget.value))
   }

return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.maxValue}>max value:</div>
            <div className={classes.inputMaxValue}>
               <input type="number"
               value={props.maxValue}
               onChange={inputMaxValueHandler}
               />
            </div>
            <div className={classes.startValue}>start value:</div>
            <div className={classes.inputStartValue}>
               <input type="number"
               value={props.startValue}
               onChange={inputStartValueHandler}/>
            </div>
         </div>
         <div className={classes.elements2}>
            <button className={classes.button} onClick={buttonSetHandler}>set</button>
         </div>
      </div>
   )
}