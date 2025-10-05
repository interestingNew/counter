import { Button } from '../Button/Button'
import './CounterSettings.module.css'
import classes from './CounterSettings.module.css'
import { ChangeEvent } from 'react'

type CounterSettingsPropsType = {
	maxValue: number
	startValue: number
	onSetButtonClick: () => void
	disabledSetButton: boolean
	changeInputMaxValueClick: (e: ChangeEvent<HTMLInputElement>) => void
	changeInputStartValueClick: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CounterSettings = ({
	disabledSetButton,
	onSetButtonClick,
	startValue,
	maxValue,
	changeInputMaxValueClick,
	changeInputStartValueClick,
}: CounterSettingsPropsType) => {
	const isErrorMaxValue = maxValue <= 0 || maxValue <= startValue
	const isErrorStartValue = startValue < 0 || startValue >= maxValue

	return (
		<div className={classes.wrapper}>
			<div className={classes.elements1}>
				<div className={classes.maxValue}>max value:</div>
				<div className={classes.divInputMaxValue}>
					<input
						className={
							isErrorMaxValue ? classes.inputValueError : ''
						}
						type='number'
						value={maxValue}
						onChange={changeInputMaxValueClick}
					/>
				</div>
				<div className={classes.startValue}>start value:</div>
				<div className={classes.divInputStartValue}>
					<input
						className={
							isErrorStartValue
								? classes.inputStartValueError
								: ''
						}
						type='number'
						value={startValue}
						onChange={changeInputStartValueClick}
					/>
				</div>
			</div>
			<div className={classes.elements2}>
				<Button
					title='set'
					onClick={onSetButtonClick}
					disabled={disabledSetButton}
				/>
			</div>
		</div>
	)
}
