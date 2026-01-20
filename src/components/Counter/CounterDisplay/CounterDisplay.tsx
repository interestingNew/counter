import './CounterDisplay.module.css'
import classes from './CounterDisplay.module.css'
import { Button } from '../Button/Button'
import { counterDisplayDataType } from '../../../model/counterDisplay-reducer'
import { counterSettingsDataType } from '../../../model/counterSettings-reducer'

type CounterDisplayProps = {
   counterDisplayData: counterDisplayDataType
   counterSettingsData: counterSettingsDataType
   onIncButtonClick: () => void
   onResetButtonClick: () => void
}

export const CounterDisplay = (props: CounterDisplayProps) => {

   const {
      counterDisplayData,
      counterSettingsData,
      onIncButtonClick,
      onResetButtonClick
   } = props

   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            {counterDisplayData.valueStrCounter ?
               <div className={counterDisplayData.valueStrCounter === "Incorrect values!" ? classes.strValueError :
                  classes.strValue}>{counterDisplayData.valueStrCounter}</div> :
               <div className={counterDisplayData.valueNumCounter === counterSettingsData.maxValue ? classes.numValueError :
                  classes.numValue}>{counterDisplayData.valueNumCounter}</div>
            }
         </div>
         <div className={classes.elements2}>
            <div className={classes.button1}>
               <Button title="inc" onClick={onIncButtonClick} disabled={counterDisplayData.disabledButtonInc || !!counterDisplayData.valueStrCounter} />
            </div>
            <div className={classes.button2}>
               <Button title="reset" onClick={onResetButtonClick} disabled={counterDisplayData.disabledButtonRes } />
            </div>
         </div>
      </div>
   )
}