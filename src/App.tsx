import './App.module.css';
import classes from './App.module.css';
import { Counter } from './components/Counter/Counter';

function App() {
  return (
    <div className={classes.app}>
      <Counter/>
    </div>
  )
}

export default App;
