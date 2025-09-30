import './CounterDisplay.module.css'
import classes from './CounterDisplay.module.css'
import { Button } from '../Button/Button'
import { INCORRECT_VALUE } from '../Counter'

type CounterProps = {
	displayValue: number
	onIncButtonClick: () => void
	onResetButtonClick: () => void
	helperText: string
	maxValue: number
	disabledIncButton: boolean
}

export const CounterDisplay = ({
	disabledIncButton,
	displayValue,
	onIncButtonClick,
	onResetButtonClick,
	helperText,
	maxValue,
}: CounterProps) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.elements1}>
				{helperText ? (
					<div
						className={
							helperText === INCORRECT_VALUE
								? classes.strValueError
								: classes.strValue
						}
					>
						{helperText}
					</div>
				) : (
					<div
						className={
							displayValue === maxValue
								? classes.numValueError
								: classes.numValue
						}
					>
						{displayValue}
					</div>
				)}
			</div>
			<div className={classes.elements2}>
				<div className={classes.button1}>
					<Button
						title='inc'
						onClick={onIncButtonClick}
						disabled={disabledIncButton}
					/>
				</div>
				<div className={classes.button2}>
					<Button
						title='reset'
						onClick={onResetButtonClick}
						disabled={!!helperText}
					/>
				</div>
			</div>
		</div>
	)
}
