import './Counter.module.css'
import classes from './Counter.module.css'

type CounterProps = {
   valueNumCounter: number
   incValue: () => void
   resetValue: () => void
   startValue: number
   valueStrCounter: string | null
   maxValue: number
}

export const Counter = (props: CounterProps) => {

   const resValHandler = () => {
      props.resetValue()
   }

   const incValHandler = () => {
      props.incValue()
   }

   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            {props.valueStrCounter ?
               props.valueStrCounter === "Incorrect values!" ?
                  <div className={classes.strValueError}>{props.valueStrCounter}</div> :
                  <div className={classes.strValue}>{props.valueStrCounter}</div> :
               props.valueNumCounter === props.maxValue ?
                  <div className={classes.numValueError}>{props.valueNumCounter}</div> :
                  <div className={classes.numValue}>{props.valueNumCounter}</div>}
         </div>
         <div className={classes.elements2}>
            <div className={classes.button1}>
               <button className={classes.button} onClick={incValHandler}>inc</button>
            </div>
            <div className={classes.button2}>
               <button className={classes.button} onClick={resValHandler}>reset</button>
            </div>
         </div>
      </div>
   )
}