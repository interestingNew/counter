import './App.module.css';
import classes from './App.module.css';
import { Counter } from '../components/Counter/Counter';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className={classes.app}>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  )
}

export default App;
