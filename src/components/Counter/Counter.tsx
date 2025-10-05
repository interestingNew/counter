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

	const onSetButtonClick = () => {
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
		const isIncorrectMaxValue = parseVal <= 0 || parseVal <= startValue;
		setHelperText(isIncorrectMaxValue ? INCORRECT_VALUE : CORRECT_VALUE)
		setDisabledButtonSet(isIncorrectMaxValue)
	}

	const changeInputStartValueClick = (e: ChangeEvent<HTMLInputElement>) => {
		let parseVal = parseInt(e.currentTarget.value)
		setStartValue(parseVal)
		const isIncorrectStartValue = parseVal < 0 || parseVal >= maxValue
		setHelperText(isIncorrectStartValue? INCORRECT_VALUE : CORRECT_VALUE)
		setDisabledButtonSet(isIncorrectStartValue)
	}
	
	useEffect(() => {
		if (helperText === INCORRECT_VALUE) {
			setDisabledButtonSet(true)
			setDisabledIncButton(true)
		}

		if (helperText === CORRECT_VALUE) {
			setDisabledIncButton(true)
		}
	}, [helperText])

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
			setDisabledIncButton(false)
		}
	}, [])

	useEffect(() => {
		if (displayValue >= maxValue) {
			setDisabledIncButton(true)
		}
	}, [displayValue])

	return (
		<div className={classes.wrapperCounter}>
			<CounterSettings
				maxValue={maxValue}
				startValue={startValue}
				onSetButtonClick={onSetButtonClick}
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
				startValue={startValue}
			/>
		</div>
	)
}
