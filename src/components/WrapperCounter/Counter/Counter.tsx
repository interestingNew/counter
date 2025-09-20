import './Counter.module.css'
import classes from './Counter.module.css'
export const Counter = () => {
   return (
      <div className={classes.wrapper}>
         <div className={classes.elements1}>
            <div className={classes.value}>0</div>
         </div>
         <div className={classes.elements2}>
            <div className={classes.button1}>
               <button className={classes.button}>inc</button>
            </div>
            <div className={classes.button2}>
               <button className={classes.button}>reset</button>
            </div>
         </div>
      </div>
   )
}