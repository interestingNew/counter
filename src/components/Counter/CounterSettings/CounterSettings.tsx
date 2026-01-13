import { Button } from "../Button/Button"
import "./CounterSettings.module.css"
import classes from "./CounterSettings.module.css"
import { ChangeEvent } from "react"

type CounterSettingsProps = {
   maxValue: number
   startValue: number
   changeInputMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
   changeInputStartValue: (e: ChangeEvent<HTMLInputElement>) => void
   onSetButtonClick: () => void
   valueStrCounter: string | null
   disabledButtonSet: boolean
}

export const CounterSettings = (props: CounterSettingsProps) => {

   const {
      maxValue,
      startValue,
      changeInputMaxValue,
      changeInputStartValue,
      onSetButtonClick,
      valueStrCounter,
      disabledButtonSet
   } = props

   const isErrorMaxValue = maxValue <= 0 || maxValue <= startValue
   const isErrorStartValue = startValue < 0 || startValue >= maxValue

   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.maxValue}>max value:</div>
            <div className={classes.divInputMaxValue}>
               <input className={isErrorMaxValue ? classes.inputValueError : ''}
                  type="number"
                  value={maxValue}
                  onChange={changeInputMaxValue} />
            </div>
            <div className={classes.startValue}>start value:</div>
            <div className={classes.divInputStartValue}>
               <input className={isErrorStartValue ? classes.inputStartValueError : ''}
                  type="number"
                  value={startValue}
                  onChange={changeInputStartValue} />
            </div>
         </div>
         <div className={classes.elements2}>
            <Button title="set"
               onClick={onSetButtonClick}
               disabled={disabledButtonSet || valueStrCounter === "Incorrect values!"} />
         </div>
      </div>
   )
}