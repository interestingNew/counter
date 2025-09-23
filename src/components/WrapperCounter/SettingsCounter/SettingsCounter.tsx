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
   setValueStrCounter: (incorrect: string)=>void
}

export const SettingsCounter = (props: SettingsCounterProps) => {
   
   const buttonSetHandler = () => {
         props.saveSettingsValue()
   }
   const changeInputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let parseVal = parseInt(e.currentTarget.value);
      props.setMaxValue(parseVal);
      (parseVal <= 0 || parseVal <= props.startValue)?
      props.setValueStrCounter("incorrect values") : 
      props.setValueStrCounter("enter values and press 'set'")
   }
   const changeInputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let parseVal = parseInt(e.currentTarget.value);
      props.setStartValue(parseVal);
      (parseVal < 0 || parseVal >= props.maxValue)?
      props.setValueStrCounter("incorrect values") : 
      props.setValueStrCounter("enter values and press 'set'")
   }

return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.maxValue}>max value:</div>
            <div className={classes.inputMaxValue}>
               <input type="number"
               value={props.maxValue}
               onChange={changeInputMaxValueHandler}
               />
            </div>
            <div className={classes.startValue}>start value:</div>
            <div className={classes.inputStartValue}>
               <input type="number"
               value={props.startValue}
               onChange={changeInputStartValueHandler}/>
            </div>
         </div>
         <div className={classes.elements2}>
            <button className={classes.button} onClick={buttonSetHandler}>set</button>
         </div>
      </div>
   )
}