import { useReducer } from 'react'
import reducer from './reducer';
import { decrement, increment } from './actions';


export function CounterUseReducer() {
    const [state, dispatch] = useReducer(reducer, {
        counter: 0
    })

    return (
        <div  className="btn-group" role="group">
            <button type="button" className="btn btn-primary" onClick={() => {dispatch(decrement())}}>-</button>
            <div className="container-counter">{ state.counter}</div>
            <button type="button" className="btn btn-primary" onClick={() => {dispatch(increment())}}>+</button>
        </div>
    )
    
}