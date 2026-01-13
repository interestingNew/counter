import './CounterDisplay.module.css'
import classes from './CounterDisplay.module.css'
import { Button } from '../Button/Button'

type CounterDisplayProps = {
   valueNumCounter: number
   onIncButtonClick: () => void
   onResetButtonClick: () => void
   valueStrCounter: string | null
   maxValue: number
   disabledButtonInc: boolean
}

export const CounterDisplay = (props: CounterDisplayProps) => {

   const {
      valueNumCounter,
      onIncButtonClick,
      onResetButtonClick,
      valueStrCounter,
      maxValue,
      disabledButtonInc
   } = props

   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            {valueStrCounter ?
               <div className={valueStrCounter === "Incorrect values!" ? classes.strValueError :
                  classes.strValue}>{valueStrCounter}</div> :
               <div className={valueNumCounter === maxValue ? classes.numValueError :
                  classes.numValue}>{valueNumCounter}</div>
            }
         </div>
         <div className={classes.elements2}>
            <div className={classes.button1}>
               <Button title="inc" onClick={onIncButtonClick} disabled={disabledButtonInc || !!valueStrCounter} />
            </div>
            <div className={classes.button2}>
               <Button title="reset" onClick={onResetButtonClick} disabled={!!valueStrCounter} />
            </div>
         </div>
      </div>
   )
}