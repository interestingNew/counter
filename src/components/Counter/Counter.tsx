import './Counter.module.css'
import classes from './Counter.module.css'
import { CounterDisplay } from './CounterDisplay/CounterDisplay'
import { useState, useEffect, ChangeEvent } from 'react'
import { CounterSettings } from './CounterSettings/CounterSettings'

export const INCORRECT_VALUE = 'Incorrect values!'
export const CORRECT_VALUE = "enter values and press 'set'"

export const Counter = () => {
	const [maxValue, setMaxValue] = useState(1)
	const [startValue, setStartValue] = useState(0)
	const [disabledButtonSet, setDisabledButtonSet] = useState(false)

	const [displayValue, setDisplayValue] = useState(0)
	const [helperText, setHelperText] = useState("enter values and press 'set'")
	const [disabledIncButton, setDisabledIncButton] = useState(false)

	useEffect(() => {
		let storedStartValue = localStorage.getItem('startValue')
		let storedMaxValue = localStorage.getItem('maxValue')
		if (storedStartValue && storedMaxValue) {
			const startValue = JSON.parse(storedStartValue)

			setDisplayValue(startValue)
			setStartValue(startValue)
			setMaxValue(JSON.parse(storedMaxValue))
			setHelperText('')
			setDisabledButtonSet(true)
		}
	}, [])

	const onSetClick = () => {
		localStorage.setItem('startValue', JSON.stringify(startValue))
		localStorage.setItem('maxValue', JSON.stringify(maxValue))

		setMaxValue(maxValue)
		setDisplayValue(startValue)
		setHelperText('')
		setDisabledButtonSet(!disabledButtonSet)
		if (disabledIncButton) {
			setDisabledIncButton(!disabledIncButton)
		}
	}
	const onResetButtonClick = () => {
		setDisplayValue(startValue)
		setDisabledIncButton(false)
	}
	const onIncButtonClick = () => {
		if (displayValue < maxValue) {
			setDisplayValue(displayValue + 1)
		}
	}

	const changeInputMaxValueClick = (e: ChangeEvent<HTMLInputElement>) => {
		let parseVal = parseInt(e.currentTarget.value)
		setMaxValue(parseVal)
		setDisabledButtonSet(false)

		const isIncorrectValue = parseVal <= 0 || parseVal <= startValue
		setHelperText(isIncorrectValue ? INCORRECT_VALUE : CORRECT_VALUE)
	}

	// TODO: отрефакторить по аналогии с changeInputMaxValueClick
	const changeInputStartValueClick = (e: ChangeEvent<HTMLInputElement>) => {
		let parseVal = parseInt(e.currentTarget.value)
		setStartValue(parseVal)
		setDisabledButtonSet(false)
		parseVal < 0 || parseVal >= maxValue
			? setHelperText(INCORRECT_VALUE)
			: setHelperText(CORRECT_VALUE)
	}

	useEffect(() => {
		if (helperText === INCORRECT_VALUE) {
			setDisabledButtonSet(true)
		}

		// if (!!helperText) {
		// 	setDisabledIncButton(true)
		// }
	}, [helperText])

	useEffect(() => {
		if (displayValue >= maxValue) {
			setDisabledIncButton(!disabledIncButton)
		}
	}, [displayValue])

	return (
		<div className={classes.wrapperCounter}>
			<CounterSettings
				maxValue={maxValue}
				startValue={startValue}
				onSetClick={onSetClick}
				disabledSetButton={disabledButtonSet}
				changeInputMaxValueClick={changeInputMaxValueClick}
				changeInputStartValueClick={changeInputStartValueClick}
			/>
			<CounterDisplay
				displayValue={displayValue}
				onIncButtonClick={onIncButtonClick}
				onResetButtonClick={onResetButtonClick}
				helperText={helperText}
				maxValue={maxValue}
				disabledIncButton={disabledIncButton}
			/>
		</div>
	)
}
