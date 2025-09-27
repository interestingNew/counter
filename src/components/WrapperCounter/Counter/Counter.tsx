import { useEffect } from 'react'
import './Counter.module.css'
import classes from './Counter.module.css'
import { Button } from '../Button/Button'

type CounterProps = {
   valueNumCounter: number
   incValue: () => void
   resetValue: () => void
   startValue: number
   valueStrCounter: string | null
   maxValue: number
   disabledButtonInc: boolean
   setDisabledButtonSetInc: (disabledButtonInc: boolean) => void
}

export const Counter = (props: CounterProps) => {

   useEffect(() => {
      if (props.valueNumCounter >= props.maxValue) {
         props.setDisabledButtonSetInc(!props.disabledButtonInc)
      }
   }, [props.valueNumCounter])
   
   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            {props.valueStrCounter ?
               <div className={props.valueStrCounter === "Incorrect values!" ? classes.strValueError :
                  classes.strValue}>{props.valueStrCounter}</div> :
               <div className={props.valueNumCounter === props.maxValue ? classes.numValueError :
                  classes.numValue}>{props.valueNumCounter}</div>
            }
         </div>
         <div className={classes.elements2}>
            <div className={classes.button1}>
               <Button title="inc" onClick={props.incValue} disabled={props.disabledButtonInc || props.valueStrCounter ? true : false} />
            </div>
            <div className={classes.button2}>
               <Button title="reset" onClick={props.resetValue} disabled={props.valueStrCounter ? true : false} />
            </div>
         </div>
      </div>
   )
}