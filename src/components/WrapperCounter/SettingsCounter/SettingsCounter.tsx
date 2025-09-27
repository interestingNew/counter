import { Button } from "../Button/Button"
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
   disabledButtonSet: boolean
   setDisabledButtonSet: (disabledButtonSet: boolean) => void
}

export const SettingsCounter = (props: SettingsCounterProps) => {

   let incorrectVal = "Incorrect values!";
   let correctVal = "enter values and press 'set'";

   const changeInputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let parseVal = parseInt(e.currentTarget.value);
      props.setMaxValue(parseVal);
      props.setDisabledButtonSet(false);
      (parseVal <= 0 || parseVal <= props.startValue) ?
         props.setValueStrCounter(incorrectVal) :
         props.setValueStrCounter(correctVal)
   }
   const changeInputStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let parseVal = parseInt(e.currentTarget.value);
      props.setStartValue(parseVal);
      props.setDisabledButtonSet(false);
      (parseVal < 0 || parseVal >= props.maxValue) ?
         props.setValueStrCounter(incorrectVal) :
         props.setValueStrCounter(correctVal)
   }

   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.maxValue}>max value:</div>
            <div className={classes.divInputMaxValue}>
               <input className={props.maxValue <= 0 || props.maxValue <= props.startValue ? classes.inputValueError : ''}
                  type="number"
                  value={props.maxValue}
                  onChange={changeInputMaxValueHandler} />
            </div>
            <div className={classes.startValue}>start value:</div>
            <div className={classes.divInputStartValue}>
               <input className={props.startValue < 0 || props.startValue >= props.maxValue ? classes.inputStartValueError : ''}
                  type="number"
                  value={props.startValue}
                  onChange={changeInputStartValueHandler} />
            </div>
         </div>
         <div className={classes.elements2}>
            <Button title="set"
               onClick={props.saveSettingsValue}
               disabled={props.disabledButtonSet || props.valueStrCounter === "Incorrect values!" ? true : false} />
         </div>
      </div>
   )
}