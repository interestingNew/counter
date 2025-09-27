import './Button.module.css'
import classes from './Button.module.css'

type ButtonProps = {
   title: string
   onClick: () => void
   disabled?: boolean
}

export const Button = (props: ButtonProps) => {

   const buttonHandler = () => {
      props.onClick()
   }

   return (
         <button className={classes.button} onClick={buttonHandler} disabled={props.disabled ? true : false}>{props.title}</button>
   )
}