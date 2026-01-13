import './Button.module.css'
import classes from './Button.module.css'

type ButtonProps = {
   title: string
   onClick: () => void
   disabled?: boolean
}

export const Button = (props: ButtonProps) => {

   const {
   title,
   onClick,
   disabled
   } = props

   const buttonHandler = () => {
      onClick()
   }

   return (
         <button className={classes.button} onClick={buttonHandler} disabled={disabled}>{title}</button>
   )
}