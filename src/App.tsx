import './App.module.css';
import classes from './App.module.css';
import { WrapperCounter } from './components/WrapperCounter/WrapperCounter';

function App() {
  return (
    <div className={classes.app}>
      <WrapperCounter/>
    </div>
  )
}

export default App;
