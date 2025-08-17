import './App.css';
import { CounterUseReducer } from './CounterUseReducer/CounterUseReducer';
import { CounterRedux } from './CounterRedux/CounterRedux';

function App() {

  return (
   <div className="container">
    <div className="row align-items-center">
    <div className="col">
          <h1>Counter<br />useReducer</h1>
          <CounterUseReducer />
          
    </div>
    <div className="col">
          <h1>Counter <br /> Redux</h1>
          <CounterRedux />
        </div>
  
  </div>

</div>
  )
}

export default App
