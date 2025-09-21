import { useEffect, useState } from 'react'
import './Counter.module.css'
import classes from './Counter.module.css'

type CounterProps = {
   valueCounter: number
   incValue: ()=>void
   resetValue: ()=>void
}

export const Counter = (props:CounterProps) => {
   
   const resValHandler = () => {
      props.resetValue()
   }

   const incValHandler = () => {
      props.incValue()
   }
   
   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.value}>{props.valueCounter}</div>
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