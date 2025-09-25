import "./SettingsCounter.module.css"
import classes from "./SettingsCounter.module.css"
import { ChangeEvent } from "react"

type SettingsCounterProps = {
   maxValue: number
   setMaxValue: (maxVal: number) => void
   startValue: number
   setStartValue: (startVal: number) => void
   saveSettingsValue: () => void
   valueStrCounter: string | null
   setValueStrCounter: (incorrect: string) => void
   valueNumCounter: number
}

export const SettingsCounter = (props: SettingsCounterProps) => {

   let incorrectVal = "Incorrect values!";
   let correctVal = "enter values and press 'set'";

   const buttonSetHandler = () => {
      props.saveSettingsValue()
   }
   const changeInputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let parseVal = parseInt(e.currentTarget.value);
      props.setMaxValue(parseVal);
      (parseVal <= 0 || parseVal <= props.startValue) ?
         props.setValueStrCounter(incorrectVal) :
         props.setValueStrCounter(correctVal)
   }
   const changeInputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let parseVal = parseInt(e.currentTarget.value);
      props.setStartValue(parseVal);
      (parseVal < 0 || parseVal >= props.maxValue) ?
         props.setValueStrCounter(incorrectVal) :
         props.setValueStrCounter(correctVal)
   }

   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.maxValue}>max value:</div>
            <div className={classes.divInputMaxValue}>
               {props.maxValue <= 0 || props.maxValue <= props.startValue?
                  <input className={classes.inputValueError}
                     type="number"
                     value={props.maxValue}
                     onChange={changeInputMaxValueHandler} /> :
                  <input type="number"
                     value={props.maxValue}
                     onChange={changeInputMaxValueHandler} />
               }
            </div>
            <div className={classes.startValue}>start value:</div>
            <div className={classes.divInputStartValue}>
               {props.startValue < 0 || props.startValue >= props.maxValue?
                  <input className={classes.inputStartValueError}
                     type="number"
                     value={props.startValue}
                     onChange={changeInputStartValueHandler} /> :
                  <input type="number"
                     value={props.startValue}
                     onChange={changeInputStartValueHandler} />
               }
            </div>
         </div>
         <div className={classes.elements2}>
            <button className={classes.button} onClick={buttonSetHandler}>set</button>
         </div>
      </div>
   )
}