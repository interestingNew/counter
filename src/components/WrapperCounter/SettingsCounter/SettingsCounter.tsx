import "./SettingsCounter.module.css"
import classes from "./SettingsCounter.module.css"

export const SettingsCounter = () => {
return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.maxValue}>max value:</div>
            <div className={classes.inputMaxValue}>
               <input type="text" />
            </div>
            <div className={classes.startValue}>start value:</div>
            <div className={classes.inputStartValue}>
               <input type="text" />
            </div>
         </div>
         <div className={classes.elements2}>
            <button className={classes.button}>set</button>
         </div>
      </div>
   )
}