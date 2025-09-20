import { useEffect, useState } from 'react';
import './App.module.css';
import classes from './App.module.css';
import { WrapperCounter } from './components/WrapperCounter/WrapperCounter';

function App() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let getVal = localStorage.getItem("counterValue")
    if(getVal) {
      let parseVal = JSON.parse(getVal)
      setValue(parseVal)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(value))
  }, [value])

  const incHandler = () => {
    setValue(value + 1)
  }

  // const setLocalStorageHandler = () => {
  //   localStorage.setItem("counterValue", JSON.stringify(value))
  //   localStorage.setItem("counterValue2", JSON.stringify(value + 10))
  // }

  // const getLocalStorageHandler = () => {
  //   let parseValue = localStorage.getItem("counterValue")
  //   if (parseValue) {
  //     setValue(JSON.parse(parseValue))
  //   }
  // }

  const clearStorageHandler = () => {
    localStorage.clear()
    setValue(0)
  }

  // const remItemHandler = () => {
  //   localStorage.removeItem("counterValue2")
  // }

  return (
    <div className={classes.app}>
      {/* <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>
      <button onClick={setLocalStorageHandler}>setLocalStorage</button>
      <button onClick={getLocalStorageHandler}>getLocalStorage</button>
      <button onClick={clearStorageHandler}>clearStorage</button>
      <button onClick={remItemHandler}>remItem</button> */}
      <WrapperCounter/>
    </div>
  );
}

export default App;
