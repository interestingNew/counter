import { counterDisplayDataType } from "../../../model/counterDisplay-reducer"
import { counterSettingsDataType } from "../../../model/counterSettings-reducer"
import { Button } from "../Button/Button"
import "./CounterSettings.module.css"
import classes from "./CounterSettings.module.css"
import { ChangeEvent } from "react"

type CounterSettingsProps = {
   counterSettingsData: counterSettingsDataType
   counterDisplayData: counterDisplayDataType
   changeInputMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
   changeInputStartValue: (e: ChangeEvent<HTMLInputElement>) => void
   onSetButtonClick: () => void
}

export const CounterSettings = (props: CounterSettingsProps) => {

   const {
      counterSettingsData,
      counterDisplayData,
      changeInputMaxValue,
      changeInputStartValue,
      onSetButtonClick
   } = props



   const isErrorMaxValue = counterSettingsData.maxValue <= 0 || counterSettingsData.maxValue <= counterSettingsData.startValue
   const isErrorStartValue = counterSettingsData.startValue < 0 || counterSettingsData.startValue >= counterSettingsData.maxValue

   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.maxValue}>max value:</div>
            <div className={classes.divInputMaxValue}>
               <input className={isErrorMaxValue ? classes.inputValueError : ''}
                  type="number"
                  value={counterSettingsData.maxValue}
                  onChange={changeInputMaxValue} />
            </div>
            <div className={classes.startValue}>start value:</div>
            <div className={classes.divInputStartValue}>
               <input className={isErrorStartValue ? classes.inputStartValueError : ''}
                  type="number"
                  value={counterSettingsData.startValue}
                  onChange={changeInputStartValue} />
            </div>
         </div>
         <div className={classes.elements2}>
            <Button title="set"
               onClick={onSetButtonClick}
               disabled={counterSettingsData.disabledButtonSet || counterDisplayData.valueStrCounter === "Incorrect values!"} />
         </div>
      </div>
   )
}