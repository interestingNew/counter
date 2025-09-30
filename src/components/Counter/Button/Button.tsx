import './Button.module.css'
import classes from './Button.module.css'

type ButtonProps = {
	title: string
	onClick: () => void
	disabled?: boolean
}

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
	return (
		<button
			className={classes.button}
			onClick={onClick}
			disabled={disabled}
		>
			{title}
		</button>
	)
}
