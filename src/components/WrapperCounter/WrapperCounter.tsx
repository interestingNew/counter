import './WrapperCounter.module.css'
import classes from './WrapperCounter.module.css'
import { SettingsCounter } from './SettingsCounter/SettingsCounter'
import { Counter } from './Counter/Counter'

export const WrapperCounter = () => {
   return <div className={classes.wrapperCounter}>
      <SettingsCounter />
      <Counter />
   </div>
}